
import SectionLabel from "../components/SectionLabel";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <SectionLabel
          number="01"
          label="ABOUT ME"
        />

        <div className="about-grid">
          {/* Main Introduction */}
          <div className="about-main">
            <h2 className="about-title">
              I build software with
              <span> purpose.</span>
            </h2>

            <p className="about-description">
              I'm a Full Stack Developer who enjoys turning
              complex problems into simple, reliable, and
              scalable software solutions.
            </p>

            <p className="about-description">
              My primary focus is backend development with
              Java and Spring Boot, while also building
              responsive and intuitive interfaces using
              React and modern frontend technologies.
            </p>

            <p className="about-description">
              I care about clean architecture, secure APIs,
              maintainable code, database design, and
              delivering applications that solve real-world
              problems.
            </p>
          </div>

          {/* Developer Information */}
          <div className="about-details">
            <div className="about-detail">
              <span className="detail-label">
                CURRENT FOCUS
              </span>

              <span className="detail-value">
                Full Stack Development
              </span>
            </div>

            <div className="about-detail">
              <span className="detail-label">
                PRIMARY STACK
              </span>

              <span className="detail-value">
                Java / Spring Boot / React
              </span>
            </div>

            <div className="about-detail">
              <span className="detail-label">
                DATABASE
              </span>

              <span className="detail-value">
                MySQL / Redis
              </span>
            </div>

            <div className="about-detail">
              <span className="detail-label">
                DEVELOPMENT
              </span>

              <span className="detail-value">
                REST APIs / Authentication / UI
              </span>
            </div>

            <div className="about-detail">
              <span className="detail-label">
                LOCATION
              </span>

              <span className="detail-value">
                Bhubaneswar, Odisha
              </span>
            </div>
          </div>
        </div>

        {/* About Stats */}
        <div className="about-stats">
          <div className="about-stat">
            <span className="stat-number">03+</span>
            <span className="stat-label">
              FULL STACK PROJECTS
            </span>
          </div>

          <div className="about-stat">
            <span className="stat-number">0.5+</span>
            <span className="stat-label">
              DEVELOPMENT EXPERIENCE
            </span>
          </div>

          <div className="about-stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">
              TECHNOLOGIES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
