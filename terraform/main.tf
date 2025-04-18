terraform {
  required_providers {
    vercel = {
        source = "vercel/vercel"
        version = "0.9.1"
    }
  }
}

provider "vercel" {
    api_token = var.vercel_token
}

resource "vercel_project" "Portfolio" {
    name = "Portfolio"
    framework = "other"
    git_repository = {
        type = "github"
        repo = "Wiii-1/CLoud_Paas"
    }
    root_directory = "."
}

resource "vercel_environment_variable" "db_url" {
    project_id = vercel_project.Portfolio.id
    key        = "DATABASE_URL"
    value      = var.DATABASE_URL
    target     = ["production"]
}



