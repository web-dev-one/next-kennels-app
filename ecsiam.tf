#task#
resource "aws_iam_role" "task_role" {
  name               = "ecs-example-task-role"
  assume_role_policy = data.aws_iam_policy_document.assume_by_ecs.json
}

resource "aws_iam_role_policy" "task_role" {
  role   = aws_iam_role.task_role.name
  policy = data.aws_iam_policy_document.task_role.json
}

resource "aws_iam_role_policy_attachment" "ecs-task-role-policy-attachment" {
  role       = aws_iam_role.task_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

data "aws_iam_policy_document" "task_role" {
  statement {
    sid    = "AllowDescribeCluster"
    effect = "Allow"

    actions = ["ecs:*"]

    resources = ["*"]
  }
  statement {
    sid    = ""
    effect = "Allow"

    actions = ["iam:*", "ecr:*", "codedeploy:*"]

    resources = ["${aws_ecs_cluster.main.arn}"]
  }
}

data "aws_iam_policy_document" "assume_by_ecs" {
  statement {
    sid     = "AllowAssumeByEcsTasks"
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com", "ecs.amazonaws.com"]
    }
  }
}
#execution#
resource "aws_iam_role" "ecs_task_execution_role" {

  name = "${var.image_repo_name}-ecsTaskExecutionRole"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": ["ecs-tasks.amazonaws.com", "ecs.amazonaws.com" ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}


resource "aws_iam_role_policy_attachment" "execution_role_pass" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = aws_iam_policy.ecs_execution_passrole.arn
}

resource "aws_iam_policy" "ecs_execution_passrole" {
  name        = "${var.name}-pass-to-ecs-exec"
  path        = "/"
  description = "Pass role to ecs service"
  policy      = data.aws_iam_policy_document.execution_passrole.json
}

data "aws_iam_policy_document" "execution_passrole" {
  statement {
    actions   = ["elasticloadbalancing:*", "application-autoscaling:*", "resource-groups:*", "iam:*", "sts:AssumeRole", "ecs:*", "cloudwatch:*", "codedeploy:*", "autoscaling:*"]
    sid       = ""
    effect    = "Allow"
    resources = ["*"]
  }
}

resource "aws_iam_role_policy_attachment" "ecs-task-execution-role-policy-attachment" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}