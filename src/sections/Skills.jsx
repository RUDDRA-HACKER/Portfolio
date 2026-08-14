
import SectionLabel from "../components/SectionLabel";
import skills from "../data/skills";

const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    description: "Building responsive and interactive user interfaces.",
    items: skills.frontend,
  },
  {
    number: "02",
    title: "BACKEND",
    description: "Developing secure and scalable server-side applications.",
    items: skills.backend,
  },
  {
    number: "03",
    title: "DATABASE",
    description: "Designing and managing reliable application data.",
    items: skills.database,
  },
  {
    number: "04",
    title: "SECURITY",
    description: "Implementing authentication and application security.",
    items: skills.security,
  },
  {
    number: "05",
    title: "TOOLS",
    description: "Tools used for development, testing, and collaboration.",
    items: skills.tools,
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <SectionLabel number="02" label="MY TOOLKIT" />

        <div className="skills-intro">
          <div>
            <h2 className="skills-title">
              Technologies I use
              <span> to build.</span>
            </h2>
          </div>

          <p className="skills-description">
            A practical technology stack focused on building
            secure, maintainable, and production-ready
            full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.number}>
              <div className="skill-group-header">
                <span className="skill-group-number">
                  {group.number}
                </span>

                <h3 className="skill-group-title">
                  {group.title}
                </h3>
              </div>

              <p className="skill-group-description">
                {group.description}
              </p>

              <div className="skill-items">
                {group.items.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-bottom">
          <span>
            CONTINUOUSLY LEARNING
          </span>

          <span className="skills-line"></span>

          <span>
            ALWAYS BUILDING
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;

