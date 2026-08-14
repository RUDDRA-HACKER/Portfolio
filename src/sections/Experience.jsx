
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import experience from "../data/experience";

function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
    >
      <div className="section-container">

        <SectionLabel
          number="04"
          label="EXPERIENCE"
        />

        {/* Introduction */}
        <div className="experience-intro">

          <div>
            <h2 className="experience-title">
              Where I've
              <span> worked.</span>
            </h2>
          </div>

          <p className="experience-description">
            My experience developing, testing, and improving
            full-stack applications while working with modern
            software development practices.
          </p>

        </div>

        {/* Experience List */}
        <div className="experience-list">

          {experience.map((item) => (
            <article
              className="experience-card"
              key={`${item.number}-${item.role}`}
            >

              {/* Left Side */}
              <div className="experience-meta">

                <span className="experience-number">
                  {item.number}
                </span>

                <span className="experience-period">
                  {item.period}
                </span>

              </div>

              {/* Right Side */}
              <div className="experience-content">

                <div className="experience-role-wrapper">

                  <h3 className="experience-role">
                    {item.role}
                  </h3>

                  <span className="experience-company">
                    {item.company}
                  </span>

                </div>

                <p className="experience-description-text">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="experience-technologies">

                  {item.technologies.map((technology) => (
                    <span
                      className="experience-tag"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Resume CTA */}
        <div className="experience-cta">

          <div className="experience-cta-text">

            <span className="experience-cta-label">
              WANT TO KNOW MORE?
            </span>

            <h3 className="experience-cta-title">
              View my complete
              <br />
              professional profile.
            </h3>

          </div>

          <a
            href="/Rudra_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-resume-button"
          >
            <span>VIEW RESUME</span>

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

export default Experience;

