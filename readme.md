# Portfolio Website - Cloud Paas Architecture

It includes a static frontend (HTML, CSS, JS) deployed on Vercel, a backend service hosted on Railway, and a PostgreSQL database provisioned on Neon.tech. The infrastructure for both the frontend and backend is managed using Terraform, following the principles of Infrastructure as Code (IaC).

## 🔑 Key Concepts Applied
- Platform as a Service (PaaS)
Utilized Vercel to host the frontend and Railway to deploy and manage the backend, eliminating the need to maintain infrastructure manually.

- Infrastructure as Code (IaC)
Used Terraform to automate the provisioning of both frontend (Vercel) and backend (Railway) environments, ensuring consistent and repeatable deployments.

- Static Web Hosting
Deployed the frontend (HTML, CSS, JS) as static assets on Vercel, taking advantage of global CDN and optimized build pipelines.

- Backend Deployment on PaaS
Hosted a backend service (e.g., API server) on Railway, allowing for easy deployment, scaling, and monitoring of server-side logic.

## 🏗️ Architecture Overview
Frontend
- Built with: HTML, CSS, JavaScript
- Hosted on: Vercel
- Deployed using: Terraform (Vercel provider)

Backend
- Built with: (e.g., Node.js / Express) ← (replace with your actual backend stack)
- Hosted on: Railway
- Deployed using: Terraform (Railway provider)

Database
- Type: PostgreSQL
- Hosted on: Neon.tech
- Provisioned: Manually (not via Terraform)

Infrastructure Provisioning
- Managed with: Terraform
- Providers used: Vercel, Railway
- Approach: Infrastructure as Code (IaC)

## Live demo
- http://portfolio-terraform-omega.vercel.app/

## File Structure
.
├── public/
│   ├── image
│   │   ├── download.jpg
│   │   ├── p.e.jpg
│   │   └── cloud Architecture.png
│   ├── index.html            
│   ├── about.html            
│   ├── project.html                          
│   └── styles.css             
├── terraform/
│   ├── main.tf                
│   ├── variables.tf           
│   ├── terraform.tfvars            
│   └── outputs.tf 
├── utils/
│   └── db.js   
├── package.json            
├── vercel.json                
└── README.md                  

## 🔧 Deployment Breakdown
Frontend:
Deployed on Vercel via Terraform.
The static website (HTML/CSS/JS) is managed and deployed using Terraform scripts directly targeting Vercel's API.

Backend:
Deployed on Railway using Terraform.
The backend API service is hosted on Railway, and the deployment pipeline is defined via Terraform configuration for consistency.

Database:
Hosted on Neon.tech.
PostgreSQL database setup was done manually and is not managed by Terraform (to be integrated in future improvements).

Mariano, Wesley, R.
Bachelor of Sciences in Computer Science at Sti College Pasay Edsa

