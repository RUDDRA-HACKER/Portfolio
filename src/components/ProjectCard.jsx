
import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  number,
  category,
  title,
  description,
  technologies = [],
  features = [],
  github,
  live,
}) {
  return (
    <article className="project-card">

      {/* Project Header */}
      <div className="project-card-header">
        <span className="project-number">
          {number}
        </span>

        <span className="project-category">
          {category}
        </span>
      </div>

      {/* Project Title */}
      <h3 className="project-title">
        {title}
      </h3>

      {/* Description */}
      <p className="project-description">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="project-features">
          {features.map((feature, index) => (
            <li key={index}>
              <span className="feature-dot"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      <div className="project-technologies">
        {technologies.map((technology) => (
          <span
            className="technology-tag"
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Project Links */}
      <div className="project-links">

        {/* GitHub */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span className="brand-icon github-icon">
              GH
            </span>

            <span>GITHUB</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
            />
          </a>
        )}

        {/* Live Demo */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span>LIVE DEMO</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
            />
          </a>
        )}

      </div>
    </article>
  );
}

export default ProjectCard;

