
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              Rudra
            </span>

            <p className="footer-description">
              Full Stack Developer building reliable,
              scalable, and user-focused web applications.
            </p>
          </div>

          {/* Back To Top */}
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>

            <ArrowUp
              size={16}
              strokeWidth={1.7}
            />
          </button>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            © {new Date().getFullYear()} Rudra Narayan Sabat.
            All rights reserved.
          </p>

          {/* Social Links */}
          <div className="footer-links">

            {/* GitHub */}
            <a
              href="https://github.com/RUDDRA-HACKER"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <span className="brand-icon github-icon">
                GH
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rudra-narayan-sabat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <span className="brand-icon linkedin-icon">
                in
              </span>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rudranarayan1803@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <Mail
                size={18}
                strokeWidth={1.6}
              />
            </a>

          </div>

          {/* Availability */}
          <span className="footer-status">
            AVAILABLE FOR OPPORTUNITIES

            <span className="status-dot"></span>
          </span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
