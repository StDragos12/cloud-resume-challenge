import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-left">
        <div className="eyebrow">Portfolio</div>
        <h1 className="title">Hi, I’m Știrban Dragoș-Vasile</h1>
        <p className="lead">
          Cloud Engineer experienced in cloud infrastructure, networking, and security.
          Passionate about system design, CI/CD & IaC automation, and building reliable, scalable environments.
        </p>

        <div className="cta">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="/#/about">About Me</a>
        </div>

        <div className="socials">
          <a href="https://github.com/StDragos12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="icon" />
          </a>
          <a href="www.linkedin.com/in/stirban-dragos-vasile-bbbb42269" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="card photo-card">
          <img src="/avatar.jpeg" alt="Știrban Dragoș-Vasile" className="photo" />
        </div>
      </div>
    </section>
  );
}
