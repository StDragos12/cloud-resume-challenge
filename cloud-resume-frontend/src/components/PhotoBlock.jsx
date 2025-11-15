import React from 'react'

export default function PhotoBlock() {
  return (
    <section className="container section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <div className="card card-float">
          <p className="lead">
            Cloud Engineer focused on GCP and Linux systems. I help clients solve issues across REST APIs,
            networking and security, with <strong>200+ tickets</strong> resolved and consistent positive feedback.
            I’m into clean, reliable infrastructure and simple, scalable solutions.
          </p>
          <ul className="bullets">
            <li>Monitoring with Grafana & Cloud Logging; traffic, service health and latency.</li>
            <li>Troubleshoot PostgreSQL & Cassandra: connectivity, performance, tuning.</li>
            <li>Manage Red Hat/Ubuntu servers: updates, security, certificates.</li>
            <li>GCP networking: load balancers, firewalls, VPC; support hybrid <strong>Apigee Edge</strong> deployments (public/private).</li>
            <li>Security: SSL/TLS, OAuth 2.0; SAML-based SSO with various IdPs.</li>
            <li>Incident response under SLAs; write clear internal docs for faster future fixes.</li>
          </ul>
        </div>

        <div className="card card-float">
          <h3 className="subheading">Research Work</h3>
          <p className="lead">
            Data-heavy projects with Python/Jupyter for environmental ML: data cleaning, EDA, feature prep
            and big-data pipelines. Built UI prototypes and visualizations to support decisions and improve model accuracy.
          </p>

          <div className="tags">
            <span className="tag">GCP</span>
            <span className="tag">Azure</span>
            <span className="tag">Linux</span>
            <span className="tag">Apigee</span>
            <span className="tag">REST APIs</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Cassandra</span>
            <span className="tag">Grafana</span>
            <span className="tag">SAML/OAuth2</span>
            <span className="tag">Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  )
}
