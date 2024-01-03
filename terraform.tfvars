region                = "us-east-2"
dockerhub_credentials = "arn:aws:secretsmanager:us-east-2:250178521864:secret:dockerhub-creds-DX3V7h"
# codestar_connector_credentials = "arn:aws:codestar-connections:us-east-1:250178521864:connection/f31651fe-4f50-4d20-a4b0-36fef0cb484c"
name     = "petsafe"
git_repo = "webdevone/next-kennels-app"
prop_tags = { Project = "petsafekennels"
  Iac = "Terraform"
}
# account_id     = "250178521864"
codebuild_name = "petsafekennels"
codebuild_params = {
  "NAME"     = "kennels-docker"
  "GIT_REPO" = "https://github.com/webdevone/next-kennels-app"
  "IMAGE"    = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
  # "IMAGE"        = "hashicorp/terraform:latest"
  # "IMAGE"        = "aws/codebuild/amazonlinux2-x86_64-standard:corretto11"
  "TYPE"         = "LINUX_CONTAINER"
  "COMPUTE_TYPE" = "BUILD_GENERAL1_SMALL"
  "CRED_TYPE"    = "CODEBUILD"
}
environment_variables = {
  "AWS_DEFAULT_REGION" = "us-east-2"
  "AWS_ACCOUNT_ID"     = "250178521864"
  "IMAGE_REPO_NAME"    = "next-kennels-app"
  "IMAGE_TAG"          = "latest"
}