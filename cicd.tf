# ## codebuild project ##
# resource "aws_codebuild_project" "codebuild_docker" {
#   name          = var.codebuild_name
#   description   = "Codebuild stage of pipeline"
#   build_timeout = "120"
#   service_role  = aws_iam_role.role.arn

#   artifacts {
#     type = "NO_ARTIFACTS"
#   }

#   source {
#     type            = "GITHUB"
#     location        = lookup(var.codebuild_params, "GIT_REPO")
#     git_clone_depth = 1

#     git_submodules_config {
#       fetch_submodules = true
#     }


#   }

#   environment {
#     image                       = lookup(var.codebuild_params, "IMAGE")
#     type                        = lookup(var.codebuild_params, "TYPE")
#     compute_type                = lookup(var.codebuild_params, "COMPUTE_TYPE")
#     image_pull_credentials_type = lookup(var.codebuild_params, "CRED_TYPE")
#     privileged_mode             = true

#     environment_variable {
#       name  = "AWS_ACCOUNT_ID"
#       value = jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]
#     }

#     environment_variable {
#       name  = "codestar_connector_credentials"
#       value = jsondecode(data.aws_secretsmanager_secret_version.codestar_creds.secret_string)["CODESTAR_CREDS"]
#     }

#     environment_variable {
#       name  = "AWS_DEFAULT_REGION"
#       value = var.region
#     }

#     environment_variable {
#       name  = "IMAGE_REPO_NAME"
#       value = var.image_repo_name
#     }

#     environment_variable {
#       name  = "IMAGE_TAG"
#       value = "latest"
#     }
#     environment_variable {
#       name  = "ECR_REPOSITORY_URI"
#       value = "${jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]}.dkr.ecr.${var.region}.amazonaws.com"
#     }
#   }

#   logs_config {
#     cloudwatch_logs {
#       group_name  = "${var.name}-log-group"
#       stream_name = "log-stream"
#     }

#     s3_logs {
#       status   = "ENABLED"
#       location = "${aws_s3_bucket.codepipeline_artifacts.id}/build-log"
#     }
#   }
# }
resource "aws_codebuild_project" "codebuild" {
  name         = "${var.name}-cicd-build"
  description  = "Build and push Dbocker image to ECR."
  service_role = aws_iam_role.codebuild-role.arn


  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = var.build_image
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode             = true


    environment_variable {
      name  = "AWS_DEFAULT_REGION"
      value = var.region
    }
    environment_variable {
      name  = "AWS_ACCOUNT_ID"
      value = jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]
    }
    environment_variable {
      name  = "ECR_REPOSITORY_URI"
      value = "${jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]}.dkr.ecr.${var.region}.amazonaws.com/${var.image_repo_name}"
    }
    environment_variable {
      name  = "IMAGE_TAG"
      value = "latest"
    }
    environment_variable {
      name  = "CPU"
      value = var.fargate_cpu
    }
    environment_variable {
      name  = "IMAGE_REPO_NAME"
      value = var.image_repo_name
    }
    environment_variable {
      name  = "GIT_REPO"
      value = "web-dev-one/next-kennels-app"
    }
    environment_variable {
      name  = "MEMORY"
      value = var.fargate_memory
    }
    environment_variable {
      name  = "SUBNET"
      value = aws_subnet.pri[0].id
    }
    environment_variable {
      name  = "SUBNET1"
      value = aws_subnet.pri[1].id
    }
    environment_variable {
      name  = "SUBNET2"
      value = aws_subnet.pri[2].id
    }
    environment_variable {
      name  = "SECURITYGROUPS"
      value = aws_security_group.ecs_tasks.id
    }
    environment_variable {
      name  = "SERVICE_PORT"
      value = var.port
    }
    environment_variable {
      name  = "PUBSUBNET"
      value = aws_subnet.pub[0].id
    }
    environment_variable {
      name  = "PUBSUBNET1"
      value = aws_subnet.pub[1].id
    }
    environment_variable {
      name  = "PUBSUBNET2"
      value = aws_subnet.pub[2].id
    }
    environment_variable {
      name  = "NEXT_PUBLIC_publickey"
      value = jsondecode(nonsensitive(data.aws_secretsmanager_secret_version.emailjs_key.secret_string))["NEXT_PUBLIC_publickey"]
    }
    environment_variable {
      name  = "NEXT_PUBLIC_templateid"
      value = jsondecode(nonsensitive(data.aws_secretsmanager_secret_version.emailjs_key.secret_string))["NEXT_PUBLIC_templateid"]
    }
    environment_variable {
      name  = "NEXT_PUBLIC_userid"
      value = jsondecode(nonsensitive(data.aws_secretsmanager_secret_version.emailjs_key.secret_string))["NEXT_PUBLIC_userid"]
    }


  }
  source {
    type      = "CODEPIPELINE"
    buildspec = file("./buildspec-init.yml")
  }


}

resource "aws_codebuild_project" "deploy" {
  name         = "${var.name}-cicd-deploy"
  description  = "Deploy stage for Docker Image"
  service_role = aws_iam_role.codebuild-role.arn

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:5.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode             = true

    environment_variable {
      name  = "AWS_DEFAULT_REGION"
      value = var.region
    }
    environment_variable {
      name  = "AWS_ACCOUNT_ID"
      value = jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]

    }
    environment_variable {
      name  = "ECR_REPOSITORY_URI"
      value = "${jsondecode(data.aws_secretsmanager_secret_version.account_id.secret_string)["AWS_ACCOUNT_ID"]}.dkr.ecr.${var.region}.amazonaws.com/${var.image_repo_name}"
    }

  }
  source {
    type      = "CODEPIPELINE"
    buildspec = file("./buildspec-deploy.yml")
  }
}


resource "aws_codepipeline" "cicd_pipeline" {

  name     = "cicd"
  role_arn = aws_iam_role.pipeline-role.arn

  artifact_store {
    type     = "S3"
    location = aws_s3_bucket.codepipeline_artifacts_next.id
  }

  stage {
    name = "Source"
    action {
      name             = "Source"
      category         = "Source"
      owner            = "AWS"
      provider         = "CodeStarSourceConnection"
      version          = "1"
      output_artifacts = ["code"]
      configuration = {
        FullRepositoryId     = var.git_repo
        BranchName           = "main"
        ConnectionArn        = jsondecode(data.aws_secretsmanager_secret_version.codestar_creds.secret_string)["CODESTAR_CREDS"]
        OutputArtifactFormat = "CODE_ZIP"
      }
    }
  }

  stage {
    name = "Plan"
    action {
      name             = "Build"
      category         = "Build"
      provider         = "CodeBuild"
      version          = "1"
      owner            = "AWS"
      input_artifacts  = ["code"]
      output_artifacts = ["BuildArtifact"]
      configuration = {
        ProjectName = "${var.name}-cicd-build"
      }
    }
  }

  # stage {
  #   name = "Deploy"
  #   action {
  #     name            = "Deploy"
  #     category        = "Build"
  #     provider        = "CodeBuild"
  #     version         = "1"
  #     owner           = "AWS"
  #     input_artifacts = ["code"]
  #     configuration = {
  #       ProjectName = "${var.name}-cicd-deploy"
  #     }
  #   }
  # }
  stage {
    name = "Deploy"
    action {
      name            = "Deploy"
      category        = "Deploy"
      provider        = "CodeDeployToECS"
      version         = "1"
      owner           = "AWS"
      input_artifacts = ["BuildArtifact"]
      configuration = {
        ApplicationName                = "${var.name}-service-deploy"
        DeploymentGroupName            = "${var.name}-service-deploy-group"
        TaskDefinitionTemplateArtifact = "BuildArtifact"
        TaskDefinitionTemplatePath     = "taskdef.json"
        AppSpecTemplateArtifact        = "BuildArtifact"
        AppSpecTemplatePath            = "appspec.yml"
      }
    }
  }
}