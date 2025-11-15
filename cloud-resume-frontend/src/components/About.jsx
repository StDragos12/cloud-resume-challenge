import React from "react";

export default function AboutPage() {
  return (
    <section className="container section">
      <h2 className="section-title">About Me</h2>

      <div className="card about-card">
        <p className="lead">
          I’m a Cloud Engineer based in Bucharest, Romania. I enjoy building
          reliable systems, automating workflows, and keeping infrastructure
          simple and scalable. I’ve supported API platforms, handled incidents
          under SLAs, and worked with data-heavy research projects.
        </p>
        <p className="lead">
          My focus is clarity: clear architectures, clear pipelines, and clear
          documentation — making it easy to ship, maintain, and evolve systems.
        </p>

        <div className="tags">
          <span className="tag">Cloud</span>
          <span className="tag">GCP</span>
          <span className="tag">Azure</span>
          <span className="tag">Linux</span>
          <span className="tag">Apigee</span>
          <span className="tag">REST APIs</span>
          <span className="tag">Terraform</span>
          <span className="tag">CI/CD</span>
          <span className="tag">IaC</span>
        </div>
      </div>
    </section>
  );
}
