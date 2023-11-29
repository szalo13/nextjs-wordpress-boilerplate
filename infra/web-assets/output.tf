output "access_key_id" {
  value     = aws_iam_access_key.wordpress_access_key.id
  sensitive = true
  description = "The access key ID"
}

output "secret_access_key" {
  value     = aws_iam_access_key.wordpress_access_key.secret
  sensitive = true
  description = "The secret access key"
}