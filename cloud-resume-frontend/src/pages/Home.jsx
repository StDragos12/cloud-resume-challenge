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
            <span>~ 4 minutes</span>
            <span>•</span>
            <span>Projects / Cloud Resume Challenge / CI/CD</span>
          </div>

          <p className="post-lead">
            This website follows the Azure version of the Cloud Resume Challenge. It
            goes beyond a static resume by showcasing real projects, deployment
            pipelines, and a simple, scalable cloud setup.
          </p>

          <p>
            The goal is to demonstrate end-to-end thinking: clean frontend, automation,
            cloud resources provisioned with IaC, and CI/CD for predictable releases.
            You’ll find a focus on reliability, security, and readable documentation.
          </p>

          <p>
            The stack will include Azure Static Web Apps for hosting, Azure Functions
            for dynamic features (like a visitor counter), and a lightweight database
            for persistent state. The pipeline is designed for repeatable builds and
            quick validation.
          </p>
        </main>
      </div>
    </section>
  );
}
