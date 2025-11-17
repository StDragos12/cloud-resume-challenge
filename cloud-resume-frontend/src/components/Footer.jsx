import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Știrban Dragoș-Vasile</span>

        <div className="footer-actions">
          <a href="mailto:stirbandragos@yahoo.ro" className="footer-email">
            stirbandragos@yahoo.ro
          </a>
          <a
            href="https://github.com/StDragos12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stirban-dragos-vasile-bbbb42269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
