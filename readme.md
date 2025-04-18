# Portfolio Website - Cloud Paas Architecture

A personal website deployed using vercel with terraform for infrastructure as Code (IaC).
It includes a static frontend(HTML, CSS, JS), a serverless function to submit suggestions for website improvement,
and a connected PostgreSQL database hosted on Neon.tech for the suggestion querries.

## Key Concepts Applied
- Platform as a Service (Paas)
- Infrastructure as Code (IaC)
- Serverless Function with vercel
- PostgreSQL Database (Neon.tech)
- Static Web Hosting


## Architecture Overview
Frontend:           HTML,CSS,JS(Static files)
Backend:            Serverless API function ('submit.js')
infra Provisioning: Terraform (Vercel Provider)
Database:           PostgreSQL via Neon.tech


## File Structure
.
├── api/
│   └── submit.js              # Serverless function for suggestions
├── public/
│   ├── index.html             # Main page
│   ├── about.html             # About section
|   ├── project.html           # the projects I made
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

## Enviroment Variables
- DATABASE_URL: My PostgreSQL connection
- VERCEL_TOKEN

Mariano, Wesley, R.
Bachelor of Sciences in Computer Science at Sti College Pasay Edsa

