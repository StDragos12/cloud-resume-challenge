import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="container section">
      <h2 className="section-title">About Me</h2>

      <div className="card about-big about-wide">
        {/* Story */}
        <div className="about-text">
          <p className="lead no-max">
            Hey! I’m Știrban Dragoș-Vasile. Welcome to my cloud portfolio — a place
            where I share my professional journey and the things I’m building.
          </p>

          <p className="lead no-max">
            I’m a Cloud Engineer currently working with cloud infrastructure,
            automation, and API platforms. I’m in my final year of{" "}
            <b>Information and Computing Systems Engineering</b> at the{" "}
            <b>University Politehnica of Bucharest</b>, where I’ve strengthened my
            foundation in distributed systems, DevOps practices, and backend
            technologies.
          </p>

          <p className="lead no-max">
            Throughout my studies and experience, I’ve been fascinated by how
            reliable cloud systems are built — from CI/CD and networking to
            monitoring and security. My goal is to create scalable, automated
            environments that are both stable and efficient.
          </p>

          <p className="lead no-max">
            Outside of tech, I spend time gaming 🎮, hanging out with friends, or
            enjoying a few beers 🍻 after a long week. I’m originally from
            <b> Suceava, Romania</b>, but now live and study in <b>Bucharest</b> —
            always up for learning, exploring, and having a good laugh.
          </p>

          <h3 className="about-subtitle">Some facts about me</h3>
          <ul className="bullets">
            <li>🎓 Final-year student at University Politehnica of Bucharest</li>
            <li>🌤 Born and raised in Suceava, now based in Bucharest</li>
            <li>🍻 Never say no to a night out with good company</li>
            <li>☁️ Constantly learning cloud, automation, and platform tooling</li>
          </ul>
        </div>

        {/* Visuals with titles */}
        <div className="about-visuals">
          <figure className="visual">
            <div className="visual-title">Workspace Setup</div>
            <img src="/about/workspace.jpg" alt="Developer workspace setup" />
          </figure>

          <figure className="visual">
            <div className="visual-title">Cloud Architecture</div>
            <img src="/about/cloud-diagram.png" alt="Cloud architecture diagram" />
          </figure>
        </div>

        {/* Milestones – Education + Experience */}
        <div className="about-timeline">
          <h3 className="about-subtitle">Milestones</h3>

          <h4 className="timeline-heading">Education</h4>
          <ul className="timeline">
            <li>
              <span className="t-date">2024 — Present</span>
              <span className="t-text">
                <b>Information and Computing Systems Engineering (Master’s)</b>, UPB —
                Bucharest, Ilfov
              </span>
            </li>
            <li>
              <span className="t-date">2020 — 2024</span>
              <span className="t-text">
                <b>
                  Electronics, Telecommunications and Information Technology
                  (Bachelor’s)
                </b>
                , UPB — Bucharest, Ilfov
              </span>
            </li>
          </ul>

          <h4 className="timeline-heading">Experience</h4>
          <ul className="timeline">
            <li>
              <span className="t-date">2023 — 2025</span>
              <span className="t-text">
                Cloud Engineer work & university deep dives in automation and cloud.
              </span>
            </li>
            <li>
              <span className="t-date">2022 — 2023</span>
              <span className="t-text">
                Research projects involving data pipelines and ML-ready datasets.
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="about-cta">
          {/* Make sure this PDF exists in the /public folder with this exact name */}
          <a
            className="btn primary"
            href="/Stirban_Dragos-Vasile_CV_.pdf"
            download
          >
            Download Resume
          </a>

          <Link className="btn" to="/contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
