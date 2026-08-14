
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { number: "01", label: "ABOUT", target: "about" },
  { number: "02", label: "SKILLS", target: "skills" },
  { number: "03", label: "WORK", target: "work" },
  { number: "04", label: "EXPERIENCE", target: "experience" },
  { number: "05", label: "CONTACT", target: "contact" },
];

function Navbar() {
  const scrollToSection = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to homepage"
        >
          <span className="logo-circle">R</span>
          <span className="logo-name">Rudra</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.target}
              className="navbar-link"
              onClick={() => scrollToSection(item.target)}
            >
              <span className="nav-number">{item.number}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Contact Button */}
        <button
          className="navbar-talk"
          onClick={() => scrollToSection("contact")}
        >
          <span>LET'S TALK</span>
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

