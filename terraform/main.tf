terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "0.11.0"
    }
    railway = {
      source = "railwayapp/railway"
      version = "2.0.0"
    }
  }
}


provider "vercel" {
  api_token = var.vercel_token
}


provider "railway" {
  api_token = var.railway_token
}


resource "vercel_project" "Portfolio" {
  name      = "portfolio-terraform"
  framework = "node"
  git_repository={
    type  = "github"
    repo  = "Wiii-1/Cloud_Paas"
    branch = "main"
  }
}


resource "vercel_project_environment_variable" "db_url" {
  project_id = vercel_project.Portfolio.id
  key        = "DATABASE_URL"
  value      = var.DATABASE_URL
  target     = ["production"]
}


resource "railway_project" "backend_project" {
  name = "backend-project"
}


resource "railway_service" "backend_service" {
  project_id = railway_project.backend_project.id
  name       = "nodejs-backend"
  type       = "nodejs"
}


resource "railway_service_environment_variable" "database_url" {
  service_id = railway_service.backend_service.id
  key        = "DATABASE_URL"
  value      = var.DATABASE_URL
}


resource "railway_database" "database" {
  project_id = railway_project.backend_project.id
  name       = "backend-db"
}


resource "railway_database_environment_variable" "db_url" {
  database_id = railway_database.database.id
  key         = "DATABASE_URL"
  value       = railway_database.database.connection_string
}


