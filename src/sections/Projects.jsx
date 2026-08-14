
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="section-container">
        <SectionLabel
          number="03"
          label="SELECTED WORK"
        />

        {/* Section Introduction */}
        <div className="projects-intro">
          <div>
            <h2 className="projects-title">
              Things I've
              <span> built.</span>
            </h2>
          </div>

          <p className="projects-description">
            A selection of full-stack applications focused on
            solving practical problems through clean
            architecture, secure APIs, and intuitive user
            experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              category={project.category}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects-cta">
          <div className="projects-cta-content">
            <span className="projects-cta-label">
              MORE PROJECTS
            </span>

            <h3 className="projects-cta-title">
              Explore my code
              <br />
              on GitHub.
            </h3>
          </div>

          <a
            href="https://github.com/RUDDRA-HACKER"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-button"
          >
            <span>VIEW GITHUB</span>

            <ArrowUpRight
              size={19}
              strokeWidth={1.7}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

