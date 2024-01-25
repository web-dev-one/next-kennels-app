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

resource "aws_acm_certificate_validation" "kennels" {
  certificate_arn         = aws_acm_certificate.hello_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.hello_cert_dns : record.fqdn]
}

resource "aws_route53_record" "hello_cert_dns" {
  # allow_overwrite = true
  # name =  tolist(aws_acm_certificate.hello_certificate.domain_validation_options)[0].resource_record_name
  # records = [tolist(aws_acm_certificate.hello_certificate.domain_validation_options)[0].resource_record_value]
  # type = tolist(aws_acm_certificate.hello_certificate.domain_validation_options)[0].resource_record_type
  # zone_id = aws_route53_zone.kennelsdomain_name.zone_id
  # ttl = 40
  for_each = {
    for dvo in aws_acm_certificate.hello_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.kennelsdomain_name.zone_id

}

resource "aws_route53_record" "kennelsomain_name" {
  zone_id = aws_route53_zone.kennelsdomain_name.zone_id

  name = var.domainName
  type = "A"
  alias {
    name                   = aws_alb.main.dns_name
    zone_id                = aws_alb.main.zone_id
    evaluate_target_health = false
  }
}