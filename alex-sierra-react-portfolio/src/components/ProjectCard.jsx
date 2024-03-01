/* eslint-disable no-unused-vars */
import React from "react";
export default function ProjectCard({title, description, image, repoLink, deployedLink}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={repoLink} className="btn btn-primary">
          GitHub
        </a>
        <a href={deployedLink} className="btn btn-primary">
          Demo
        </a>
      </div>
    </div>
  );
}
