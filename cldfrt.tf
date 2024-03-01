resource "aws_cloudfront_distribution" "distribution" {
  count           = 1
  aliases         = [var.domainName]
  comment         = "kennels-app-task"
  enabled         = true
  is_ipv6_enabled = true
  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        =  ["US"]
    }
  }
  
  origin {
    domain_name = aws_alb.main.dns_name
    origin_id   = "kennels-app-task"
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
    
  }
  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "kennels-app-task"
    viewer_protocol_policy = "redirect-to-https"
    forwarded_values {
      cookies {
        forward = "all"
      }
      query_string = true
    }
  }

  viewer_certificate {
    acm_certificate_arn            = aws_acm_certificate.hello_certificate.arn
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
    ssl_support_method             = "sni-only"
  }
}