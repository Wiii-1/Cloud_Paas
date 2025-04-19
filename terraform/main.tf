terraform {
  required_providers {
    vercel = {
        source = "vercel/vercel"
        version = "0.11.0"
    }
  }
}

provider "vercel" {
    api_token = var.vercel_token
}

resource "vercel_project" "Portfolio" {
  name = "portfolio-terraform"
  git_repository = {
    type = "github"
    repo = "Wiii-1/Cloud_Paas"
    branch = "main"
  }
}


resource "vercel_project_environment_variable" "database_url" {
  project_id = vercel_project.Portfolio.id  
  key        = "DATABASE_URL"
  value      = var.DATABASE_URL
  target     = ["production", "preview"]
}


resource "vercel_project_environment_variable" "python_version" {
  project_id = vercel_project.Portfolio.id
  key        = "PYTHON_VERSION"
  value      = "3.9" 
  target     = ["production", "preview"]
}