import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import uopLogo from "../assets/uop.png"; // University logo
import stcLogo from "../assets/stc.png"; // School logo

const techStack = [
  "Java",
  "Python",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "Express",
  "Django",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "Google BigQuery",
  "Swagger",
  "Postman",
  "Selenium",
  "JMeter",
  "Git",
  "AWS (Amplify, EC2, OpenSearch, IoT Core, DocumentDB)",
  "HTML",
  "CSS",
  "Bootstrap",
  "Firebase",
  "OpenAI",
  "JIRA",
  "Confluence",
  "Slack",
  "Google Meets",
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About Me</h2>

        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Computer Engineer from the <strong>University of Peradeniya</strong>{" "}
          specializing in <strong>Software Engineering</strong>,{" "}
          <strong>Quality Engineering</strong>,{" "}
          <strong>Machine Learning</strong>, and{" "}
          <strong>Artificial Intelligence</strong>. Experienced in full-stack
          development, testing, deployment, and AI-driven solutions. Strong
          problem-solving skills, adaptability, and a collaborative mindset.
        </motion.p>

        <h3 className="edu-title">Education</h3>

        <div className="edu-cards">
          <motion.div
            className="edu-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={uopLogo}
              alt="University of Peradeniya"
              className="edu-img"
            />
            <div className="edu-content">
              <h4>University of Peradeniya</h4>
              <p className="edu-duration">June 2021 – August 2025</p>
              <p>BSc Eng Hons in Computer Engineering</p>
              <p>
                <strong>Current GPA:</strong> 3.50 / 4.00
              </p>
            </div>
          </motion.div>

          <motion.div
            className="edu-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={stcLogo}
              alt="St. Thomas’ Boys College, Matara"
              className="edu-img"
            />
            <div className="edu-content">
              <h4>St. Thomas’ Boys College, Matara</h4>
              <p className="edu-duration">January 2010 – August 2019</p>
              <p>G.C.E. Advanced Level – District Rank: 51</p>
              <p>G.C.E. Ordinary Level – 9As</p>
            </div>
          </motion.div>
        </div>

        <h3 className="tech-title">Technical Skills</h3>

        <motion.div
          className="tech-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              className="tech-card"
              key={index}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
