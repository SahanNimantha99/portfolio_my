import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import myPhoto from "../assets/myphoto.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-image-wrapper">
          <motion.img
            src={myPhoto}
            alt="Sahan Nimantha"
            className="hero-image"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,180,216,0.6)",
            }}
          />
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I’m Sahan Nimantha
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I'm a <strong>Computer Engineer</strong> specializing in Software
          Development, AI/ML, and DevOps Engineering. I design and build
          intelligent, scalable applications that make technology more human.
          Let’s shape the future together.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            className="btn btn-primary hero-btn"
            onClick={() => scrollToSection("about")}
          >
            About Me
          </button>

          <button
            className="btn btn-secondary hero-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>

          <a
            href="/Sahan_Nimantha_CV.pdf"
            download
            className="btn btn-primary hero-btn"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
