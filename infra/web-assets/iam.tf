resource "aws_s3_bucket_policy" "bucket_public_policy" {
  bucket = aws_s3_bucket.assets_bucket.id

  policy = jsonencode({
    "Id": "Policy",
    "Statement": [
      {
        "Action": [
          "s3:GetObject"
        ],
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::${aws_s3_bucket.assets_bucket.bucket}/*",
        "Principal": {
          "AWS": [
            "*"
          ]
        }
      }
    ]
  })
}

resource "aws_iam_user" "www_wordpress_user" {
  name = "${local.prefix}-wordpress-user"
}

resource "aws_iam_policy" "www_wordpress_policy" {
  name        = "S3AccessPolicy"
  description = "Policy for allowing S3 access"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "s3:*",
        Effect   = "Allow",
        Resource =  [

          "arn:aws:s3:::${aws_s3_bucket.assets_bucket.bucket}",
          "arn:aws:s3:::${aws_s3_bucket.assets_bucket.bucket}/*"
        ],
      },
    ],
  })
}

resource "aws_iam_user_policy_attachment" "www_wordpress_user_policy_attachment" {
  user       = aws_iam_user.www_wordpress_user.name
  policy_arn = aws_iam_policy.www_wordpress_policy.arn
}

resource "aws_iam_access_key" "wordpress_access_key" {
  user    = aws_iam_user.www_wordpress_user.name
}
