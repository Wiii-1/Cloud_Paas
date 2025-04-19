# Portfolio Website - Cloud Paas Architecture

A personal website deployed using Vercel with Terraform for Infrastructure as Code (IaC).
It includes a static frontend (HTML, CSS, JS).

## Key Concepts Applied
- Platform as a Service (PaaS)
- Infrastructure as Code (IaC)
- Static Web Hosting

## Architecture Overview
Frontend:           HTML, CSS, JS (Static files)
Infra Provisioning: Terraform (Vercel Provider)

## Live demo
- http://portfolio-terraform-omega.vercel.app/

## File Structure
.
├── public/
│   ├── index.html             # Main page
│   ├── about.html             # About section
│   ├── project.html           # The projects I made
│   └── css/                   # Styles
├── terraform/
│   ├── main.tf                # Terraform config
│   ├── variables.tf           # Variables
│   └── outputs.tf             # (Optional)
├── vercel.json                # Routing & build configuration
└── README.md                  # You're reading it!

## Deployment

1. Initialize Terraform 
        terraform init
2. Check the plan
        terraform plan
3. Deploy Infrastructure
        terraform apply

Mariano, Wesley, R.
Bachelor of Sciences in Computer Science at Sti College Pasay Edsa

