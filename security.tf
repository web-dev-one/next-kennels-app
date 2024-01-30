resource "aws_security_group" "lb" {
  name        = "load-balancer-security-group"
  description = "controls access to the ALB"
  vpc_id      = aws_vpc.main.id

  ingress {
    protocol         = "TCP"
    from_port        = 80
    to_port          = 80
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    protocol    = "TCP"
    from_port   = 3000
    to_port     = 3000
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "TCP"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# resource "aws_security_group" "aws-crud-service_security_group" {
#   ingress {
#     from_port = 3000
#     to_port   = 3000
#     protocol  = "TCP"
#     # Only allowing traffic in from the load balancer security group
#     security_groups = ["${aws_security_group.lb.id}"]
#   }
#   ingress {
#     from_port = 80
#     to_port   = 80
#     protocol  = "TCP"
#     # Only allowing traffic in from the load balancer security group
#     security_groups = ["${aws_security_group.lb.id}"]
#   }
#   egress {
#     from_port   = 0             # Allowing any incoming port
#     to_port     = 0             # Allowing any outgoing port
#     protocol    = "-1"          # Allowing any outgoing protocol 
#     cidr_blocks = ["0.0.0.0/0"] # Allowing traffic out to all IP addresses
#   }
# }
# # Traffic to the ECS cluster should only come from the ALB
resource "aws_security_group" "ecs_tasks" {
  name        = "ecs-tasks-security-group"
  description = "allow inbound access from the ALB only"
  vpc_id      = aws_vpc.main.id

  ingress {
    protocol        = "TCP"
    from_port       = var.port
    to_port         = var.port
    security_groups = [aws_security_group.lb.id]
    cidr_blocks     = ["0.0.0.0/0"]
  }
  ingress {
    protocol        = "TCP"
    from_port       = 80
    to_port         = 80
    security_groups = [aws_security_group.lb.id]
    cidr_blocks     = ["0.0.0.0/0"]
  }

  ingress {
    protocol        = "TCP"
    from_port       = 443
    to_port         = 443
    security_groups = [aws_security_group.lb.id]
    cidr_blocks     = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}