variable "vercel_token" {
  description = "Vercel API Token"
  type        = string
  sensitive   = true
}

variable "database_url" {
  description = "Database connection string"
  type        = string
  sensitive   = true
}

variable "railway_token" {
  description = "Railway API Token"
  type        = string
  sensitive   = true
}

variable "environment_id" {
  description = "The ID of the Railway environment"
  type        = string
}