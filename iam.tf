data "local_file" "assumeRole_policy" {
  filename = "policy/assumeRole.json"
}

data "local_file" "policy" {
  filename = "policy/policy.json"
}


resource "aws_iam_role" "role" {
  name               = "${var.name}-iam-role-terraform"
  assume_role_policy = data.local_file.assumeRole_policy.content
}

resource "aws_iam_role_policy" "not_being_used" {
  role   = aws_iam_role.role.name
  policy = replace(replace(data.local_file.policy.content, "ACCOUNT_ID", jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]), "CODEBUILD_NAME", var.codebuild_name)
}

## CODEPIPELINE ROLE ##

resource "aws_iam_role" "pipeline-role" {
  name = "${var.name}-pipeline-role"

  # Terraform's "jsonencode" function converts a
  # Terraform expression result to valid JSON syntax.
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "codepipeline.amazonaws.com"
        }
      },
    ]
  })

  tags = {
    tag-key = "codepipeline-role"
  }
}

data "aws_iam_policy_document" "cicd-pipeline-policies" {
  statement {
    sid       = ""
    actions   = ["codestar-connections:UseConnection"]
    resources = ["*"]
    effect    = "Allow"
  }
  statement {
    sid       = ""
    actions   = ["cloudwatch:*", "s3:*", "codebuild:*", "ecr:*", "codedeploy:*", "ecs:*", "iam:*", "codedeploy:*", "route53:*"]
    resources = ["*"]
    effect    = "Allow"
  }
}

resource "aws_iam_policy" "cicd-pipeline-policy" {
  name        = "${var.name}-cicd-pipeline-policy"
  path        = "/"
  description = "Pipeline policy"
  policy      = data.aws_iam_policy_document.cicd-pipeline-policies.json
}

resource "aws_iam_role_policy_attachment" "cicd-pipeline-attachment" {
  policy_arn = aws_iam_policy.cicd-pipeline-policy.arn
  role       = aws_iam_role.pipeline-role.id
}

## CODEBUILD ##
resource "aws_iam_role" "codebuild-role" {
  name = "${var.name}-codebuild-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

}

data "aws_iam_policy_document" "cicd-build-policies" {
  statement {
    sid       = ""
    actions   = ["logs:*", "s3:*", "codebuild:*", "secretsmanager:*", "iam:*", "ecr:*", "ecr:completeLayerUpload", "ecr:InitiateLayerUpload", "ecr:PutImage", "ecr:UploadLayerPart", "route53:*"]
    resources = ["*"]
    effect    = "Allow"
  }
}

resource "aws_iam_policy" "cicd-build-policy" {
  name        = "${var.name}-cicd-build-policy"
  path        = "/"
  description = "Codebuild policy"
  policy      = data.aws_iam_policy_document.cicd-build-policies.json
}

resource "aws_iam_role_policy_attachment" "cicd-codebuild-attachment" {
  policy_arn = aws_iam_policy.cicd-build-policy.arn
  role       = aws_iam_role.codebuild-role.id
}

resource "aws_iam_role_policy_attachment" "tf-cicd-codebuild-attachment2" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryPowerUser"
  role       = aws_iam_role.codebuild-role.id
}

## ECS ###



## AUTO SCALING ##

resource "aws_iam_role" "ecs_auto_scale_role" {
  name = "${var.name}-ecs-service"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
EOF
}

data "aws_iam_policy_document" "ecs_service_scaling" {

  statement {
    effect = "Allow"

    actions = [
      "application-autoscaling:*",
      "ecs:DescribeServices",
      "ecs:UpdateService",
      "cloudwatch:DescribeAlarms",
      "cloudwatch:PutMetricAlarm",
      "cloudwatch:DeleteAlarms",
      "cloudwatch:DescribeAlarmHistory",
      "cloudwatch:DescribeAlarms",
      "cloudwatch:DescribeAlarmsForMetric",
      "cloudwatch:GetMetricStatistics",
      "cloudwatch:ListMetrics",
      "cloudwatch:PutMetricAlarm",
      "cloudwatch:DisableAlarmActions",
      "cloudwatch:EnableAlarmActions",
      "iam:CreateServiceLinkedRole",
      "sns:CreateTopic",
      "sns:Subscribe",
      "sns:Get*",
      "sns:List*",
      "route53:*"
    ]

    resources = [
      "*"
    ]
  }
}

resource "aws_iam_policy" "ecs_service_scaling" {
  name        = "${var.name}-dev-to-scaling"
  path        = "/"
  description = "Allow ecs service scaling"
  policy      = data.aws_iam_policy_document.ecs_service_scaling.json
}

resource "aws_iam_role_policy_attachment" "ecs_service_scaling" {
  role       = aws_iam_role.ecs_auto_scale_role.name
  policy_arn = aws_iam_policy.ecs_service_scaling.arn
}

resource "aws_iam_role" "codedeploy" {
  name               = "${var.name}-codedeploy"
  assume_role_policy = data.aws_iam_policy_document.assume_by_codedeploy.json
}

data "aws_iam_policy_document" "codedeploy" {
  statement {
    sid    = "AllowLoadBalancingAndECSModifications"
    effect = "Allow"

    actions = [
      "ecs:*",
      "lambda:InvokeFunction",
      "elasticloadbalancing:*",
      "cloudwatch:*",
      "sns:Publish",
      "s3:*",
      "codedeploy:*",
      "iam:*",
      "route53:*",
      "ecr:*"
    ]

    resources = ["*"]
  }

  statement {
    sid    = "AllowPassRole"
    effect = "Allow"

    actions = ["iam:PassRole"]

    resources = [
      "${aws_iam_role.ecs_task_execution_role.arn}",
      "${aws_iam_role.task_role.arn}",
      "${aws_iam_role.codedeploy.arn}",
      # "${aws_iam_role.app_task_role.arn}"
    ]
  }
}

resource "aws_iam_role_policy" "codedeploy" {
  role   = aws_iam_role.codedeploy.name
  policy = data.aws_iam_policy_document.codedeploy.json
}



data "aws_iam_policy_document" "execution_role" {
  statement {
    sid    = "AllowECRLogging"
    effect = "Allow"

    actions = [
      "application-autoscaling:*",
      "ecr:*",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "codedeploy:*",
      "elasticloadbalancing:*",
      "iam:*",
      "ecs:*",
      "s3:*",
      "route53:*",
      "sts:*"

    ]

    resources = ["*"]
  }
}


data "aws_iam_policy_document" "assume_by_codedeploy" {
  statement {
    sid     = ""
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["codedeploy.amazonaws.com"]
    }
  }
}


## ECS ##









# resource "aws_iam_role" "execution_role" {
#   name               = "ecs-example-execution-role"
#   assume_role_policy = data.aws_iam_policy_document.assume_by_ecs.json
# }


# resource "aws_iam_role_policy" "execution_role" {
#   role   = aws_iam_role.execution_role.name
#   policy = data.aws_iam_policy_document.execution_role.json
# }




# resource "aws_iam_role" "app_task_role" {
#   name = "app-task-role"

#   assume_role_policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Effect = "Allow",
#         Principal = {
#           Service = "ecs-tasks.amazonaws.com"
#         },
#         Action = "sts:AssumeRole"
#       }
#     ]
#   })
# }

# resource "aws_iam_role_policy_attachment" "ECS_task_execution" {
#   role       = aws_iam_role.app_task_role.name
#   policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# }


##ECSES#













# resource "aws_iam_role" "ecs_task_role" {
#   name = "${var.name}-ecsTaskRole"

#   assume_role_policy = <<EOF
# {
#  "Version": "2012-10-17",
#  "Statement": [
#    {
#      "Action": "sts:AssumeRole",
#      "Principal": {
#        "Service": "ecs-tasks.amazonaws.com"
#      },
#      "Effect": "Allow",
#      "Sid": ""
#    }
#  ]
# }
# EOF
# }


# resource "aws_iam_role_policy_attachment" "ecs-task-role-policy-attachment" {
#   role       = aws_iam_role.ecs_task_role.name
#   policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# }



data "aws_iam_policy_document" "ecs_service_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_service_role" {
  assume_role_policy = data.aws_iam_policy_document.ecs_service_role_policy.json
  name               = "EcsCluster-ServiceRole"

}

resource "aws_iam_role_policy_attachment" "service_role" {
  role       = aws_iam_role.ecs_service_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceRole"
}


data "aws_iam_policy_document" "ecs_task_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_task_role" {
  name = "${var.name}-ecsTaskRole-sts"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": ["ecs.amazonaws.com","ecs-tasks.amazonaws.com"]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "default_task_role" {
  role       = aws_iam_role.ecs_task_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "task_role_pass" {
  role       = aws_iam_role.ecs_task_role.name
  policy_arn = aws_iam_policy.ecs_service_passrole.arn
}

resource "aws_iam_policy" "ecs_service_passrole" {
  name        = "${var.name}-pass-to-ecs"
  path        = "/"
  description = "Pass role to ecs service"
  policy      = data.aws_iam_policy_document.ecs_passrole.json
}

data "aws_iam_policy_document" "ecs_passrole" {
  statement {
    actions   = ["iam:*", "sts:AssumeRole", "ecs:*", "cloudwatch:*"]
    sid       = ""
    effect    = "Allow"
    resources = ["*"]
  }
}