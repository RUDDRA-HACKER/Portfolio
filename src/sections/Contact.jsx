
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <SectionLabel
          number="05"
          label="GET IN TOUCH"
        />

        <div className="contact-content">

          {/* Main Heading */}
          <div className="contact-heading">
            <span className="contact-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="contact-title">
              Let's build
              <br />
              something
              <span> meaningful.</span>
            </h2>

            <p className="contact-description">
              I'm always interested in discussing software
              development, new opportunities, and projects
              that create real-world impact.
            </p>
          </div>

          {/* Contact Links */}
          <div className="contact-links">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rudranarayan1803@gmail.com"
              className="contact-link"
            >
              <div className="contact-link-left">
                <Mail
                  size={20}
                  strokeWidth={1.5}
                />

                <div>
                  <span className="contact-link-label">
                    EMAIL
                  </span>

                  <span className="contact-link-value">
                    rudranarayan1803@gmail.com
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RUDDRA-HACKER"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-left">
                <span className="brand-icon github-icon">
                  GH
                </span>

                <div>
                  <span className="contact-link-label">
                    GITHUB
                  </span>

                  <span className="contact-link-value">
                    RUDDRA-HACKER
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rudra-narayan-sabat/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-left">
                <span className="brand-icon linkedin-icon">
                  in
                </span>

                <div>
                  <span className="contact-link-label">
                    LINKEDIN
                  </span>

                  <span className="contact-link-value">
                    CONNECT WITH ME
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
              />
            </a>

          </div>
        </div>

        {/* Availability Banner */}
        <div className="contact-availability">

          <div className="availability-status">
            <span className="availability-dot"></span>

            <span>
              CURRENTLY AVAILABLE FOR
              <strong> NEW OPPORTUNITIES</strong>
            </span>
          </div>

          <span className="availability-location">
            BHUBANESWAR, INDIA
          </span>

        </div>
      </div>
    </section>
  );
}

export default Contact;

