terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "3.2.1"
    }
    railway = {
      source = "terraform-community-providers/railway"
      version = "0.5.1"
    }
  }
}

# --- Providers ---
provider "vercel" {
  api_token = var.vercel_token
}

provider "railway" {
  token = var.railway_token
}

resource "vercel_project" "Portfolio" {
  name = "portfolio-terraform"
  git_repository = {
    type = "github"
    repo = "Wiii-1/Cloud_Paas"
  }
}


resource "railway_project" "backend_project" {
  name = "backend"
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