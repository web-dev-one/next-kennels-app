resource "aws_alb" "main" {
  
  name = "load-balancer"
  # subnets         = [for subnet in aws_subnet.pub.*: subnet.id ]
  # subnets = [for subnet in var.subnets: subnet]
  # subnets         = [for subnet in aws_subnet.pub : subnet.id]
  subnets =  aws_subnet.pub.*.id 
  security_groups = [aws_security_group.lb.id, aws_security_group.ecs_tasks.id]
}

resource "aws_alb_target_group" "app" {
  name        = "target-group-https"
  port        = 443
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200,301,302,404"
    timeout             = "3"
    path                = var.health_check_path
    unhealthy_threshold = "2"
  }
}


resource "aws_alb_target_group" "app2" {
  name        = "target-group-2-https"
  port        = 443
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200,301,302,404"
    timeout             = "3"
    path                = var.health_check_path
    unhealthy_threshold = "2"
  }
}

## LISTENERS ##

resource "aws_alb_listener" "https" {
  
  load_balancer_arn = aws_alb.main.id
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = aws_acm_certificate_validation.kennels.certificate_arn
  default_action {
    target_group_arn = aws_alb_target_group.app2.id
    type             = "forward"
  }

}

# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "front_end" {

  load_balancer_arn = aws_alb.main.id
  port              = 80
  protocol          = "HTTP"
  default_action {
    type = "redirect"

    redirect {
      port        = 443
      protocol    = "HTTPS"
      status_code = "HTTP_302"
    }
  }

  depends_on = [aws_acm_certificate_validation.kennels]
}

# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "front_end2" {

  load_balancer_arn = aws_alb.main.id
  port              = 3000
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_alb_target_group.app.id
    type             = "forward"
  }
}
