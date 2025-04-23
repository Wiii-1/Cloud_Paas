terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "2.15.1"
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
  }
}


