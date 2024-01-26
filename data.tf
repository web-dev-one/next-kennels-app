data "aws_lb" "default" {
  name = aws_alb.main.name
}

data "aws_lb_listener" "default" {
  load_balancer_arn = data.aws_lb.default.arn
  port = 443
}
