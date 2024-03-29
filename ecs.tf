resource "aws_ecs_cluster" "main" {
  name = "kennels-cluster"
}


resource "aws_ecs_task_definition" "app" {
  family                   = "kennels-app-task"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.task_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = <<DEFINITION
[
  {
    "name": "${var.image_repo_name}",
    "image": "${jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]}.dkr.ecr.${var.region}.amazonaws.com/${var.image_repo_name}:${var.docker_tag}",
    "essential": true,
    "portMappings": [
      { "protocol": "tcp",
        "containerPort": 3000,
        "hostPort": 3000
      }
    ],
    "environment": [
      {"name": "NEXT_PUBLIC_publickey", 
      "value": "${jsondecode(data.aws_secretsmanager_secret_version.emailjs_key.secret_string)["NEXT_PUBLIC_publickey"]}"
      },
       {"name": "EMAIL_TEMPLATE", 
       "value": "${jsondecode(data.aws_secretsmanager_secret_version.emailjs_key.secret_string)["NEXT_PUBLIC_templateid"]}"
       },
        {"name": "NEXT_PUBLIC_userid", 
        "value": "${jsondecode(data.aws_secretsmanager_secret_version.emailjs_key.secret_string)["NEXT_PUBLIC_userid"]}"
        }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${aws_cloudwatch_log_group.kennels_app.name}",
        "awslogs-region": "${var.region}",
        "awslogs-stream-prefix": "/ecs/kennels"
      }
    }
  }
]
DEFINITION

  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "X86_64"
  }
}

resource "aws_ecs_service" "main" {
  name            = "${var.name}-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = var.app_count
  launch_type     = "FARGATE"

  deployment_minimum_healthy_percent = 50
  deployment_maximum_percent         = 100
  health_check_grace_period_seconds  = 900

  deployment_controller {
    type = "CODE_DEPLOY"
  }
  network_configuration {

    security_groups  = [aws_security_group.lb.id]
    subnets          =  aws_subnet.pub.*.id # var.subnets #    # aws_subnet.pub.*.id  #
    assign_public_ip = true

  }

  load_balancer {
    target_group_arn = aws_lb_target_group.tg[0].id 
    container_name   = var.image_repo_name
    container_port   = 3000
  }

  depends_on = [aws_alb_listener.l_8080, aws_iam_role.ecs_task_execution_role, aws_iam_role.ecs_task_role]
}