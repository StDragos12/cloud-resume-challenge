import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaExternalLinkAlt } from "react-icons/fa";

const LIVE_URL = "https://gray-sky-04de71f1e.6.azurestaticapps.net/";

export default function ProjectsPage() {
  return (
    <section className="container section">
      <h2 className="section-title">Projects</h2>
      <p className="lead">
        A look at the projects where I’ve blended cloud, automation, and web
        development. Here’s a detailed view of my IT Business Manager platform.
      </p>

      {/* Top hoverable preview card */}
      <div className="projects-grid">
        <ProjectCard
          title="IT Business Manager"
          description="A cloud-based business platform I built for IT companies to manage finances, employees, and internal operations from a single place."
          url={LIVE_URL}
          image="/project-preview.png"
        />
      </div>

      {/* Full project case-study card */}
      <article id="project-itbm" className="card project-detail expanded">
        <header className="project-detail-head">
          <div>
            <h3 className="project-detail-title">IT Business Manager</h3>
            <p className="project-detail-subtitle">
              End-to-end e-business platform built on Azure, with Static Web
              Apps, Azure Functions and a managed MySQL database.
            </p>
          </div>
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn small"
          >
            Live Site <FaExternalLinkAlt style={{ marginLeft: 6 }} />
          </a>
        </header>

        <div className="project-detail-body padded">
          <section className="project-section">
            <h4>Overview</h4>
            <p>
              <strong>IT Business Manager</strong> is a platform I designed for
              IT companies who want to digitalize their internal processes.  
              The application helps with financial tracking, internal admin,
              employee management, and analytics — all in one place.
            </p>
            <p>
              I built this project end-to-end: the UI, Azure hosting, Function
              API layer, MySQL schema and all business logic. The stack is fully
              serverless, so it's easy to deploy, update, and maintain.
            </p>
          </section>

          <section className="project-section">
            <h4>What I Implemented</h4>
            <ul>
              <li>Authentication with role-based access (admin vs standard user).</li>
              <li>Full income/expense tracking with categorization and monthly summaries.</li>
              <li>Interactive analytics dashboards using Chart.js.</li>
              <li>CSV export for offline viewing.</li>
              <li>Employee CRUD management for admin users.</li>
            </ul>
          </section>

          <section className="project-section">
            <h4>Security & Data Model</h4>
            <ul>
              <li>Client-side password hashing using SHA-256.</li>
              <li>Validation on all forms to enforce correct input formats.</li>
              <li>
                A structured data model with tables for <em>users</em>,
                <em> employees</em> and <em>financial entries</em>.
              </li>
              <li>SSL/TLS secured MySQL connections.</li>
            </ul>
          </section>

          <section className="project-section">
            <h4>Azure Architecture & Tech Stack</h4>
            <p>
              This project uses a clean, cloud-native Azure architecture:
            </p>
            <ul>
              <li><strong>Frontend:</strong> HTML, CSS, JS + Chart.js</li>
              <li><strong>Backend:</strong> Azure Functions (Node.js, REST endpoints)</li>
              <li><strong>Database:</strong> Azure Database for MySQL</li>
              <li><strong>Hosting:</strong> Azure Static Web Apps (global scaling + SSL)</li>
              <li><strong>Tooling:</strong> GitHub CI/CD, MySQL Workbench, VSCode</li>
            </ul>
          </section>

          {/* NEW Architecture Diagram */}
          <section className="project-section architecture-section">
            <h4>System Architecture Diagram</h4>
            <img
              src="/about/cloud-diagram.png"
              alt="System architecture diagram"
              className="architecture-image"
            />
          </section>
        </div>
      </article>
    </section>
  );
}
