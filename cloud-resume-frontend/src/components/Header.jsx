import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGithub } from "react-icons/fa";

export default function Header() {
  const [views, setViews] = useState(null);

  // Use env var in production, fallback to local dev
  const API_URL =
    import.meta.env.VITE_VIEWS_API_URL || "http://localhost:7071/api/views";

  useEffect(() => {
    async function loadViews() {
      try {
        const res = await fetch(API_URL, {
          method: "POST", // POST increments and returns updated count
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        const data = await res.json();
        setViews(data.count);
      } catch (err) {
        console.error("Failed to load view count:", err);
        setViews(0);
      }
    }

    loadViews();
  }, [API_URL]); // re-run only if env var changes

  return (
    <header className="header">
      <div className="container nav-shell">
        <div className="nav-pill">
          {/* views badge */}
          <div className="views-badge">
            <span className="views-count" id="viewCount">
              {views === null ? "…" : views}
            </span>
            <span className="views-label">views</span>
          </div>

          {/* nav */}
          <nav className="menu-center">
            <Link className="menu-link" to="/">
              <FaHome className="link-icon" />
              Home
            </Link>
            <Link className="menu-link" to="/about">About</Link>
            <Link className="menu-link" to="/resume">Resume</Link>
            <Link className="menu-link" to="/projects">Projects</Link>
            <a
              className="menu-link"
              href="https://github.com/StDragos12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="link-icon" />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
