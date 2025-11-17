import React from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin,
  FaDownload, FaGlobe, FaCertificate
} from "react-icons/fa";

export default function ResumePage() {
  return (
    <section className="container section resume">
      {/* Header */}
      <div className="r-head">
        <div className="r-identity">
          <h1 className="r-name">Dragoș-Vasile Știrban</h1>
          <div className="r-sub">Cloud Engineer • Infrastructure • Networking • Security</div>
        </div>

        <div className="r-contacts">
          <a href="mailto:stirbandragos1@gmail.com" className="r-link">
            <FaEnvelope /> stirbandragos1@gmail.com
          </a>
          <a href="tel:+40752865038" className="r-link">
            <FaPhone /> +40 752 865 038
          </a>
          <span className="r-link">
            <FaMapMarkerAlt /> Bucharest, Romania
          </span>
          <a className="r-link" href="https://github.com/StDragos12" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a className="r-link" href="www.linkedin.com/in/stirban-dragos-vasile-bbbb42269" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="r-actions">
          <a className="btn primary" href="/Stirban_Dragos-Vasile_CV.pdf" download>
            <FaDownload style={{marginRight: 8}}/> Download PDF
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="r-card">
        <h2 className="r-title">Summary</h2>
        <p className="r-body">
          Cloud Engineer experienced in cloud infrastructure, networking, and security. Passionate about
          system design and administration, automation with CI/CD and IaC, and creating reliable, scalable
          environments.
        </p>
      </div>

      {/* Experience */}
      <div className="r-grid-2">
        <div className="r-card">
          <h2 className="r-title">Experience</h2>

          <div className="r-role">
            <div className="r-role-head">
              <div className="r-role-title">Cloud Engineer L1 – GCP</div>
              <div className="r-role-meta">Cognizant Softvision · Sept 2023 – Sept 2025 · Bucharest</div>
            </div>
            <ul className="r-list">
              <li>Resolved 200+ tickets across REST APIs & cloud networking with consistently great client feedback.</li>
              <li>Monitored traffic, service health & latency using Grafana and Cloud Logging.</li>
              <li>Troubleshot PostgreSQL & Cassandra: connectivity, performance, maintenance.</li>
              <li>Maintained Linux servers (RHEL/Ubuntu) for SaaS: updates, security, certificates.</li>
              <li>Worked with GCP networking (LBs, firewalls, VPC) and hybrid Apigee Edge (public/private).</li>
              <li>Implemented SSL/TLS & OAuth 2.0; SAML SSO integrations with multiple IdPs.</li>
              <li>Collaborated with engineering to reproduce/report bugs & outages; met enterprise SLAs.</li>
              <li>Kept internal documentation clean, enabling faster future incident resolution.</li>
            </ul>
          </div>

          <div className="r-role">
            <div className="r-role-head">
              <div className="r-role-title">Research Assistant</div>
              <div className="r-role-meta">Beia Consult International · Jun 2023 – Sept 2023 · Bucharest</div>
            </div>
            <ul className="r-list">
              <li>Prepared high-quality datasets for environmental ML (temperature, humidity, PM10 prediction).</li>
              <li>Cleaned & transformed large time-series data with Python/Jupyter; ensured consistency.</li>
              <li>Performed EDA and statistical analysis to reveal trends, correlations, anomalies.</li>
              <li>Optimized data pipelines; unified multi-source inputs for ML training/evaluation.</li>
              <li>Built UI prototypes/visualizations supporting decision-making and model accuracy.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="r-card">
          <h2 className="r-title">Skills</h2>

          <div className="r-skill-group">
            <div className="r-skill-head">Cloud</div>
            <div className="chips">
              <span className="chip">GCP</span><span className="chip">Azure</span><span className="chip">AWS (exposure)</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">CI/CD & Automation</div>
            <div className="chips">
              <span className="chip">Jenkins</span><span className="chip">GitLab</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">Infrastructure & IaC</div>
            <div className="chips">
              <span className="chip">Terraform</span><span className="chip">Ansible</span><span className="chip">Helm</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">OS & Scripting</div>
            <div className="chips">
              <span className="chip">Linux (RHEL/Ubuntu)</span><span className="chip">Bash</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">Programming</div>
            <div className="chips">
              <span className="chip">Python</span><span className="chip">JavaScript</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">Databases</div>
            <div className="chips">
              <span className="chip">PostgreSQL</span><span className="chip">Cassandra</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">Containers & Orchestration</div>
            <div className="chips">
              <span className="chip">Docker</span><span className="chip">Kubernetes</span><span className="chip">AKS mgmt</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">Networking</div>
            <div className="chips">
              <span className="chip">OSI Model</span><span className="chip">Topology</span><span className="chip">Security config</span>
            </div>
          </div>

          <div className="r-skill-group">
            <div className="r-skill-head">Soft</div>
            <div className="chips">
              <span className="chip">Empathy</span><span className="chip">Attention to detail</span>
              <span className="chip">Collaboration</span><span className="chip">Communication</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education, Certifications, Languages */}
      <div className="r-grid-3">
        <div className="r-card">
          <h2 className="r-title">Education</h2>
          <div className="r-edu">
            <div className="r-edu-title">Information & Computing Systems Engineering (Master’s)</div>
            <div className="r-edu-meta">UPB – Bucharest, Ilfov · Oct 2024 – Present</div>
          </div>
          <div className="r-edu">
            <div className="r-edu-title">Electronics, Telecommunications & IT (Bachelor’s)</div>
            <div className="r-edu-meta">UPB – Bucharest, Ilfov · Oct 2020 – Jul 2024</div>
          </div>
        </div>

        <div className="r-card">
          <h2 className="r-title">Certifications</h2>
          <div className="chips">
            <span className="chip chip-cert"><FaCertificate/> CCNA</span>
            <span className="chip chip-cert"><FaCertificate/> ECDL</span>
            <span className="chip chip-cert"><FaCertificate/> Linux & Python (Luxoft)</span>
          </div>
        </div>

        <div className="r-card">
          <h2 className="r-title">Languages</h2>
          <div className="chips">
            <span className="chip">Romanian — Native</span>
            <span className="chip">English — Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
}
