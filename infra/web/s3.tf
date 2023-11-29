resource "aws_s3_bucket" "website_static" {
  bucket = local.bucket_name

  tags = {
    Name        = local.bucket_name
    Environment = var.environment
    Project     = var.module
  }
}

resource "aws_s3_bucket_website_configuration" "website_static" {
  bucket = aws_s3_bucket.website_static.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "website_static" {
  bucket = aws_s3_bucket.website_static.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "website_static" {
  bucket = aws_s3_bucket.website_static.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "website_static" {
  depends_on = [
    aws_s3_bucket_ownership_controls.website_static,
    aws_s3_bucket_public_access_block.website_static,
  ]

  bucket = aws_s3_bucket.website_static.id
  acl    = "public-read"
}