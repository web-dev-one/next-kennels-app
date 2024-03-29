variable "region" {
  description = "Region"
  type        = string
  default     = "us-east-1"
}

variable "prop_tags" {
  description = "Tags"
  type        = map(string)
  default = {
    Project = "Codebuild Terraform"
    IaC     = "Terraform"
  }
}

variable "codebuild_name" {
  description = "Codebuild project name"
  type        = string
  default     = "kennels-safe-codebuild-terraform"
}

variable "codebuild_params" {
  description = "Codebuild parameters"
  type        = map(string)
  default = {
    "NAME"         = "kennels-docker"
    "GIT_REPO"     = "https://github.com/web-dev-one/next-kennels-app"
    "IMAGE"        = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
    "TYPE"         = "LINUX_CONTAINER"
    "COMPUTE_TYPE" = "BUILD_GENERAL1_SMALL"
    "CRED_TYPE"    = "CODEBUILD"
  }
  sensitive = true
}

variable "environment_variables" {
  description = "Environment variables"
  type        = map(string)
  default = {
    "AWS_DEFAULT_REGION" = "us-east-2"
    "IMAGE_REPO_NAME"    = "petsafekennels"
    "IMAGE_TAG"          = "latest"
  }
  sensitive = true
}

variable "name" {
  type        = string
  description = "Name of infrastructure project."
  default     = "kennels-next-app"
}

variable "git_repo" {
  type        = string
  description = "Full url of Github Repo to watch for changes"
  default     = "web-dev-one/next-kennels-app"
}

variable "image_repo_name" {
  type        = string
  description = "Name of ECS repo name."
  default     = "next-kennels-app"
}

variable "ecs_task_execution_role_name" {
  type        = string
  description = "Name of ECS Task execution role."
  #add later
  default = "value"
}

variable "ecs_auto_scale_role_name" {
  type        = string
  description = "Name of autoscaling group."
  #add later
  default = ""
}

variable "az_count" {
  type        = number
  description = "Number of availability zones in Region."
  default     = 3
}

## REMEMBER TO BUILD ECR REPO URL WITH TAG IN CODE ##
variable "port" {
  type        = number
  description = "Port Docker image exposes to traffic."
  #update to 443 for encryption
  default = 3000
}

variable "app_count" {
  type        = number
  description = "Number of Containers to run."
  default     = 3
}

variable "health_check_path" {
  type        = string
  description = "Path to prform health checks through."
  default     = "/"
}

variable "fargate_cpu" {
  type        = string
  description = "CPU to provision for Fargate instances."
  default     = 2048
}

variable "fargate_memory" {
  type        = string
  description = "Fargate instance memory to provision."
  default     = 4096
}

variable "main_cidr" {
  type        = string
  description = "CIDR block of main VPC."
  default     = "10.0.0.0/16"
}

variable "docker_tag" {
  type        = string
  description = "Image tag for docker."
  default     = "latest"
}

variable "domainName" {
  default = "petsafekennels.com"
  type    = string
}

variable "bucketName" {
  default = "petsafekennels.com"
  type    = string
}

variable "build_image" {
  type        = string
  description = "Image used by CodeBuild during build stage."
  #  default = "aws/codebuild/standard:5.0"
  default = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
}

variable "subnets" {
  # default = {
  #   sub1    = "subnet-03abb2d6a7b8bd754"
  #   sub1    = "subnet-09103e8b1f18617b4"
  #   sub1    = "subnet-001b4e02a2cf8837d"
  #   pubsub2 = "subnet-0441cacc63f7bc083"
  #   pubsub3 = "subnet-0e87c5a524af2217e"
  #   pubsub3 = "subnet-0a13b28e34bf115b2"
  # } 
  default = [
    "subnet-003acc056188221c2"
    , "subnet-0cd0fbe6458e588b9"
    , "subnet-0bfcaf443e18fb4a6"
    , "subnet-092a32a1d349dbd77"
    , "subnet-0441fd33f98a735ea"
    , "subnet-0db6b4da8981e9224"

  ]
}