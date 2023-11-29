variable "module" {
  description   = "Project name"
  default       = "www"
  type          = string
}
variable "region" {
  description   = "AWS region"
  type          = string
}

variable "profile" {
  description   = "AWS profile"
  type          = string
}

variable "company_prefix" {
  description   = "Dashed prefix for resources"
  type          = string
}

variable "environment" {
  description   = "Environment name"
  type          = string
}