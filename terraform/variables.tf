variable "vercel_token" {
    description = "9G0tyJ6yFr6FTKCZMJq6svpA"
    type = string
    sensitive = true
}

variable "railway_token" {
  description = "3099c1d9-48cd-43da-a792-fc144c3433c4"
  type        = string
  sensitive   = true
}

variable "DATABASE_URL" {
  type        = string
  description = "Connection string for the PostgreSQL database"
  sensitive   = true
  default     = "jdbc:postgresql://ep-rapid-smoke-a1vwvg99-pooler.ap-southeast-1.aws.neon.tech/Suggestions?user=Suggestions_owner&password=npg_E9pAC0eOwSKP&sslmode=require"
}

