import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="card profile-card">
        <div className="profile-photo">
          <img src="/avatar.jpeg" alt="Știrban Dragoș-Vasile" />
        </div>

        <div className="profile-meta">
          <div className="profile-name">Știrban Dragoș-Vasile</div>
          <div className="profile-location">Bucharest, Romania</div>

          <div className="profile-links">
            <a
              href="https://github.com/StDragos12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="profile-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/stirban-dragos-vasile-bbbb42269"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="profile-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="card tags-card">
        <h4 className="tags-title">Tags</h4>
        <div className="tags">
          <span className="tag">Cloud</span>
          <span className="tag">GCP</span>
          <span className="tag">Azure</span>
          <span className="tag">Linux</span>
          <span className="tag">Apigee</span>
          <span className="tag">REST APIs</span>
          <span className="tag">Terraform</span>
          <span className="tag">Grafana</span>
          <span className="tag">CI/CD</span>
          <span className="tag">IaC</span>
        </div>
      </div>
    </aside>
  );
}
