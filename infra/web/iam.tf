resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = aws_s3_bucket.website_static.id

  policy = jsonencode({
    "Id": "Policy",
    "Statement": [
      {
        "Action": [
          "s3:GetObject"
        ],
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::${aws_s3_bucket.website_static.bucket}/*",
        "Principal": {
          "AWS": [
            "*"
          ]
        }
      }
    ]
  })
}