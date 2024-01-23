# variable hosted_zone_id {

# }

# variable elb {

# }

# data "aws_route53_zone" "selected" {
#   zone_id  = var.hosted_zone_id
# }

# resource "aws_route53_record" "dev_to" {
#   zone_id = data.aws_route53_zone.selected.zone_id
#   name    = data.aws_route53_zone.selected.name
#   type    = "A"

#   alias {
#     name                   = var.elb.dns_name
#     zone_id                = var.elb.zone_id
#     evaluate_target_health = true
#   }
# }


resource "aws_route53_zone" "kennelsdomain_name" {
  name = var.domainName
}

resource "aws_acm_certificate" "hello_certificate" {
  domain_name       = var.domainName

  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "hello_cert_dns" {
  allow_overwrite = true
  name =  tolist(aws_acm_certificate.hello_certificate.domain_validation_options)[0].resource_record_name
  records = [tolist(aws_acm_certificate.hello_certificate.domain_validation_options)[0].resource_record_value]
  type = tolist(aws_acm_certificate.hello_certificate.domain_validation_options)[0].resource_record_type
  zone_id = aws_route53_zone.kennelsdomain_name.zone_id
  ttl = 60
}

resource "aws_route53_record" "kennelsomain_name" {
  zone_id = aws_route53_zone.kennelsdomain_name.zone_id

  name = var.domainName
  type = "A"
  alias {
    name                   = aws_alb.main.dns_name
    zone_id                = aws_alb.main.zone_id
    evaluate_target_health = true
  }
}