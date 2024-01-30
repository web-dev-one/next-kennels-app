# data "aws_lb" "default" {
#   name = aws_alb.main.name
# }

# data "aws_alb_listener" "https" {
#   load_balancer_arn = data.aws_alb.default.arn
#   port              = 443
# }

# data "aws_alb_listener" "front_end"{
#   load_balancer_arn = data.aws_lb.default.arn
#   port = 80
# }
