terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "2.15.1"
    }
     railway = {
      source = "terraform-community-providers/railway"
      version = "0.4.6"
    }
  }
}

# Vercel Provider
provider "vercel" {
  api_token = var.vercel_token
}

# Railway Provider
provider "railway" {
  token = var.railway_token
}

# Vercel Project
resource "vercel_project" "Portfolio" {
  name = "portfolio-terraform"
  git_repository = {
    type = "github"
    repo = "Wiii-1/Cloud_Paas"
  }
}

# Railway Project
resource "railway_project" "backend_project" {
  name = "my-backend"
}

resource "railway_service" "backend_service" {
  project_id = railway_project.backend_project.id
  name       = "backend-api"
}

resource "railway_variable" "database_url" {
  service_id     = railway_service.backend_service.id
  environment_id = var.environment_id
  name           = "DATABASE_URL"
  value          = var.database_url
}

resource "railway_deployment_trigger" "github_trigger" {
  service_id     = railway_service.backend_service.id
  environment_id = var.environment_id
  repository     = "Wiii-1/Cloud_Paas"
  branch         = "main"
}


