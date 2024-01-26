resource "aws_codedeploy_app" "this" {
  compute_platform = "ECS"
  name             = "${var.name}-service-deploy"
}

resource "aws_codedeploy_deployment_group" "this" {
  app_name               = aws_codedeploy_app.this.name
  deployment_group_name  = "${var.name}-service-deploy-group"
  deployment_config_name = "CodeDeployDefault.ECSAllAtOnce"
  service_role_arn       = aws_iam_role.codedeploy.arn


  blue_green_deployment_config {
    deployment_ready_option {
      action_on_timeout = "CONTINUE_DEPLOYMENT"
    }

    terminate_blue_instances_on_deployment_success {
      action                           = "TERMINATE"
      termination_wait_time_in_minutes = 50
    }

  }

  ecs_service {
    cluster_name = aws_ecs_cluster.main.name
    service_name = aws_ecs_service.main.name
  }

  deployment_style {
    deployment_option = "WITH_TRAFFIC_CONTROL"
    deployment_type   = "BLUE_GREEN"
  }

  auto_rollback_configuration {
    enabled = true
    # type of the event trigerring rollback (DEPLOYMENT_STOP_ON_ALARM - if CloudWatch alarm is associated or DEPLOYMENT_FAILURE)
    events = ["DEPLOYMENT_FAILURE"]
  }

  load_balancer_info {
    target_group_pair_info {
      prod_traffic_route {
        listener_arns = ["${data.aws_alb_listener.https.arn}"]
      }
      target_group {
        name = aws_alb_target_group.app.name
      }
      target_group {
        name = aws_alb_target_group.app2.name
      }
    }
  }
}