import React, { useEffect, useState } from "react";
import "./Navbar.css";

const sections = [
  "hero",
  "about",
  "work",
  "projects",
  "achievements",
  "contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleScroll = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (
        el &&
        scrollPos >= el.offsetTop &&
        scrollPos < el.offsetTop + el.offsetHeight
      ) {
        setActiveSection(sec);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <button
          className="navbar-brand btn btn-link"
          onClick={() => scrollToSection("hero")}
        >
          Sahan Nimantha
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                className={`nav-item nav-link btn btn-link ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
