import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container text-center">
      <h1 className="hero-title">
        Turning Complex Ideas into Scalable Solutions
      </h1>
      <p className="hero-description">
        I'm a Computer Engineer specializing in Software Development, AI/ML, and
        DevOps Engineering. From building intuitive applications to designing
        intelligent systems, I thrive on leveraging cutting-edge technologies to
        create impactful, innovative solutions. Let's shape the future together.
      </p>

      <div className="hero-buttons">
        <button
          className="btn btn-primary hero-btn"
          onClick={() => scrollToSection("projects")}
        >
          View Projects
        </button>
        <button
          className="btn btn-secondary hero-btn"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
