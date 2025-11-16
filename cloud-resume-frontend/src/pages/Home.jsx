import React from "react";
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  return (
    <section className="container section">
      <div className="home-grid">
        <Sidebar />

        <main className="card post-card">
          <h1 className="post-title">Cloud Portfolio</h1>

          <div className="post-meta">
            <span>Projects / Cloud Resume Challenge / CI/CD</span>
          </div>

          <p className="post-lead">
            This site is my implementation of the Azure Cloud Resume Challenge.
            It turns a simple portfolio into a small production-style cloud
            platform with infrastructure as code, automation, monitoring, and a
            full CI/CD pipeline.
          </p>

          {/* Architecture image – add the file in /public/images (see notes below) */}
          <figure className="image-row">
            <img
              src="/images/CloudResumeArhitecture.drawio.png"
              alt="High-level architecture of my Azure Cloud Resume project"
            />
            <figcaption>
              High-level architecture: users hit the site through Azure Front Door,
              which serves a static React app and calls an Azure Functions API backed
              by Cosmos DB and monitored with Application Insights and Log Analytics.
            </figcaption>
          </figure>

          <h2>Frontend – React on Azure Storage + Front Door</h2>
          <p>
            The frontend is built with <strong>React + Vite</strong> and styled
            with custom CSS. The compiled static files are hosted in an{" "}
            <strong>Azure Storage static website</strong> container (<code>$web</code>).
            Traffic is routed through <strong>Azure Front Door</strong>, which
            provides a global entry point, HTTPS, and my custom domain.
          </p>
          <p>
            A small views badge in the header calls an API to show how many times
            the site has been visited. That’s where the backend and database come in.
          </p>

          <h2>Backend API – Azure Functions (Python)</h2>
          <p>
            Dynamic features (like the visitor counter) are exposed via an{" "}
            <strong>Azure Functions</strong> HTTP-triggered function written in{" "}
            <strong>Python</strong>. The function:
          </p>
          <ul>
            <li>Receives a request from the frontend.</li>
            <li>Reads the current view count from the database.</li>
            <li>Increments and stores the new value.</li>
            <li>Returns the updated count as JSON.</li>
          </ul>

          <h2>Data Layer – Azure Cosmos DB (Table API)</h2>
          <p>
            The view count is stored in <strong>Azure Cosmos DB</strong> using the{" "}
            <strong>Table API</strong>. This gives me a simple key/value-style
            data model with low operational overhead and serverless pricing. It is
            a good fit for small amounts of structured data like counters and
            audit records.
          </p>

          <h2>Infrastructure as Code – Terraform</h2>
          <p>
            All cloud resources are provisioned using <strong>Terraform</strong>,
            stored in the <code>infra</code> folder of this repository. Terraform
            definitions include:
          </p>
          <ul>
            <li>Resource group and storage account for the static site.</li>
            <li>Azure Function App and hosting plan.</li>
            <li>Cosmos DB account and table for the view counter.</li>
            <li>Azure Front Door endpoint, origin group, and route.</li>
            <li>Log Analytics workspace and Application Insights instance.</li>
          </ul>
          <p>
            Using Terraform means I can recreate the entire environment from code,
            keep changes in version control, and avoid manual configuration drift.
          </p>

          <h2>Observability – Application Insights & Log Analytics</h2>
          <p>
            The Function App is connected to <strong>Azure Application Insights</strong>,
            which captures request traces, exceptions, and performance metrics.
            Application Insights is backed by a <strong>Log Analytics workspace</strong>,
            where I can run Kusto queries to analyze:
          </p>
          <ul>
            <li>API request volume and latency.</li>
            <li>Failures or exceptions in the Function.</li>
            <li>Client IPs and user agents hitting the site.</li>
          </ul>
          <p>
            This gives the project real monitoring and troubleshooting capabilities,
            similar to what you would expect in a production system.
          </p>

          <h2>CI/CD – GitHub Actions</h2>
          <p>
            The repository uses <strong>GitHub Actions</strong> to continuously
            build, test, and deploy both the frontend and backend:
          </p>
          <ul>
            <li>
              <strong>Backend workflow</strong>: runs Python tests (pytest) for
              the Azure Function code and, if they pass, deploys the app using the
              Function App publish profile.
            </li>
            <li>
              <strong>Frontend workflow</strong>: builds the React app with Vite
              and uploads the <code>dist</code> folder directly to the{" "}
              <code>$web</code> container via the Azure CLI using a storage
              connection string.
            </li>
          </ul>
          <p>
            Both workflows trigger on pushes to the <code>main</code> branch,
            giving me automated, repeatable deployments. The code in GitHub is the
            single source of truth for the entire stack.
          </p>

          <h2>Traffic Flow & Environments</h2>
          <p>
            At a high level, the system works like this:
          </p>
          <ul>
            <li>
              <strong>User</strong> → <strong>Azure Front Door</strong> →{" "}
              static site in <strong>Azure Storage</strong>.
            </li>
            <li>
              React app → <strong>Azure Functions API</strong> →{" "}
              <strong>Cosmos DB</strong> for persistent data.
            </li>
            <li>
              All services emit logs and metrics to{" "}
              <strong>Application Insights</strong> and{" "}
              <strong>Log Analytics</strong> for analysis.
            </li>
            <li>
              <strong>GitHub main branch</strong> → GitHub Actions → deploys
              Terraform-defined infrastructure and application code.
            </li>
          </ul>

          <h2>What this project demonstrates</h2>
          <p>
            Beyond having a nice-looking resume site, this project demonstrates:
          </p>
          <ul>
            <li>Front-end skills with React, Vite, and modern tooling.</li>
            <li>Back-end skills with Python and Azure Functions.</li>
            <li>Working with managed services like Cosmos DB.</li>
            <li>Infrastructure as code with Terraform.</li>
            <li>Real CI/CD pipelines using GitHub Actions.</li>
            <li>Monitoring and observability with Application Insights and Log Analytics.</li>
          </ul>
        </main>
      </div>
    </section>
  );
}
