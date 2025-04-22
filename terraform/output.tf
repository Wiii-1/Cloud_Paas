output "vercel_project_url" {
  value       = vercel_project.Portfolio.url
  description = "The URL of the deployed Vercel project"
}

output "render_service_url" {
  value       = render_service.Portfolio.url
  description = "The URL of the deployed Render service"
}