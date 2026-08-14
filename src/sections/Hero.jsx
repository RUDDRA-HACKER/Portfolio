
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CodeWindow from "../components/CodeWindow";

function Hero() {
  const scrollToProjects = () => {
    const projects = document.getElementById("work");

    if (projects) {
      projects.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-indicator"></span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <p className="hero-intro">
            HELLO, I'M RUDRA
          </p>

          <h1 className="hero-title">
            Building reliable
            <br />
            <span>software</span>
            <br />
            that solves real
            <br />
            problems.
          </h1>

          <p className="hero-description">
            I'm a Full Stack Developer focused on building
            scalable web applications using Java, Spring
            Boot, React, and modern web technologies.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={scrollToProjects}
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight size={17} />
            </button>

            <button
              className="secondary-button"
              onClick={scrollToContact}
            >
              LET'S CONNECT
            </button>
          </div>
        </div>

        {/* Right Code Panel */}
        <div className="hero-code">
          <CodeWindow />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="hero-scroll"
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
      >
        <span>SCROLL TO EXPLORE</span>

        <ArrowDown
          size={17}
          strokeWidth={1.5}
        />
      </button>
    </section>
  );
}

export default Hero;

