resource "aws_alb" "main" {
  
  name            = "load-balancer"
  # subnets         = [for subnet in aws_subnet.pub.*: subnet.id ]
  # subnets = [for subnet in var.subnets: subnet]
   subnets = [ for subnet in aws_subnet.pub : subnet.id]
  security_groups = [aws_security_group.lb.id]
}
# aws_subnet.pub.*.id
resource "aws_alb_target_group" "app" {
  name        = "target-group"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200"
    timeout             = "3"
    path                = var.health_check_path
    unhealthy_threshold = "2"
  }
}

# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "front_end" {
  load_balancer_arn = aws_alb.main.id
  port              = var.port
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_alb_target_group.app.id
    type             = "forward"
  }
}

resource "aws_alb_target_group" "app2" {
  name        = "target-group-2"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200"
    timeout             = "3"
    path                = var.health_check_path
    unhealthy_threshold = "2"
  }
}