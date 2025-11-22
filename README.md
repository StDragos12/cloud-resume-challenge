This site is my implementation of the Azure Cloud Resume Challenge. It turns a simple portfolio into a small production-style cloud platform with infrastructure as code, automation, monitoring, and a full CI/CD pipeline.

<img width="797" height="1003" alt="CloudResumeArhitecture drawio" src="https://github.com/user-attachments/assets/247073d9-94e7-4dd8-ac9f-95519f8638e6" />

High-level architecture of my Azure Cloud Resume project
High-level architecture: users hit the site through Azure Front Door, which serves a static React app and calls an Azure Functions API backed by Cosmos DB and monitored with Application Insights and Log Analytics.
Frontend – React on Azure Storage + Front Door
The frontend is built with React + Vite and styled with custom CSS. The compiled static files are hosted in an Azure Storage static website container ($web). Traffic is routed through Azure Front Door, which provides a global entry point, HTTPS, and my custom domain.

A small views badge in the header calls an API to show how many times the site has been visited. That’s where the backend and database come in.

Backend API – Azure Functions (Python)
Dynamic features (like the visitor counter) are exposed via an Azure Functions HTTP-triggered function written in Python. The function:

Receives a request from the frontend.
Reads the current view count from the database.
Increments and stores the new value.
Returns the updated count as JSON.
Data Layer – Azure Cosmos DB (Table API)
The view count is stored in Azure Cosmos DB using the Table API. This gives me a simple key/value-style data model with low operational overhead and serverless pricing. It is a good fit for small amounts of structured data like counters and audit records.

Infrastructure as Code – Terraform
All cloud resources are provisioned using Terraform, stored in the infra folder of this repository. Terraform definitions include:

Resource group and storage account for the static site.
Azure Function App and hosting plan.
Cosmos DB account and table for the view counter.
Azure Front Door endpoint, origin group, and route.
Log Analytics workspace and Application Insights instance.
Using Terraform means I can recreate the entire environment from code, keep changes in version control, and avoid manual configuration drift.

Observability – Application Insights & Log Analytics
The Function App is connected to Azure Application Insights, which captures request traces, exceptions, and performance metrics. Application Insights is backed by a Log Analytics workspace, where I can run Kusto queries to analyze:

API request volume and latency.
Failures or exceptions in the Function.
Client IPs and user agents hitting the site.
This gives the project real monitoring and troubleshooting capabilities, similar to what you would expect in a production system.

CI/CD – GitHub Actions
The repository uses GitHub Actions to continuously build, test, and deploy both the frontend and backend:

Backend workflow: runs Python tests (pytest) for the Azure Function code and, if they pass, deploys the app using the Function App publish profile.
Frontend workflow: builds the React app with Vite and uploads the dist folder directly to the $web container via the Azure CLI using a storage connection string.
Both workflows trigger on pushes to the main branch, giving me automated, repeatable deployments. The code in GitHub is the single source of truth for the entire stack.

Traffic Flow & Environments
At a high level, the system works like this:

User → Azure Front Door → static site in Azure Storage.
React app → Azure Functions API → Cosmos DB for persistent data.
All services emit logs and metrics to Application Insights and Log Analytics for analysis.
GitHub main branch → GitHub Actions → deploys Terraform-defined infrastructure and application code.
What this project demonstrates
Beyond having a nice-looking resume site, this project demonstrates:

Front-end skills with React, Vite, and modern tooling.
Back-end skills with Python and Azure Functions.
Working with managed services like Cosmos DB.
Infrastructure as code with Terraform.
Real CI/CD pipelines using GitHub Actions.
Monitoring and observability with Application Insights and Log Analytics.
