import React from "react";

export default function ProjectCard({ url, image }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card clean"
    >
      <div
        className="project-bg clean"
        style={{ backgroundImage: `url(${image})` }}
      />
    </a>
  );
}
