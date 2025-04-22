terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "0.11.0"
    }
    render = {
      source  = "render/render"
      version = "0.5.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_token
}

provider "render" {
  api_key = var.render_api_key
}

resource "vercel_project" "Portfolio" { 
  name = "portfolio-terraform"  
  git_repository = {
    type = "github"
    repo = "Wiii-1/Cloud_Paas"
  }
}

resource "render_service" "Portfolio" {
  name        = "portfolio-render"
  type        = "web_service"
  repo        = "https://github.com/Wiii-1/Cloud_Paas"
  branch      = "main"
  region      = "Singapore"
  env         = "node" 
  auto_deploy = true

  env_vars = {
    NODE_ENV = "production"
  }
}

