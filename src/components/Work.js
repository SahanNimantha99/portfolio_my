import React from "react";
import { motion } from "framer-motion";
import "./Work.css";
import neuraPhoto from "../assets/neura.jpg"; // Add company photo
import universityPhoto from "../assets/uop.png"; // Add university photo

const experiences = [
  {
    role: "Intern Software Engineer | Hybrid",
    company: "Neura Intelligence (Pvt) Ltd, Sri Lanka",
    duration: "June 2024 – August 2025",
    photo: neuraPhoto,
    details: [
      "Contributed to Full Stack Development, Quality Engineering tasks (testing), deployment and maintenance, and project management.",
      "Automated Form Filling Tool (FFT) – Frontend enhancements, optimized AI prompt generation, manual testing, and AWS deployment.",
      "Automated Food Order Module (FOM) – Improved UI, integrated OpenAI scripts for intelligent order comparison, AWS deployment.",
      "Financial Information Platform (FIP) – Developed tagging features, resolved UI issues, managed AWS deployment, comprehensive testing.",
    ],
    tech: [
      "ReactJS",
      "NodeJS",
      "Express",
      "HTML",
      "CSS",
      "DocumentDB",
      "MongoDB",
      "OpenAI",
      "Google Cloud Speech API",
      "GitHub",
      "FastAPI",
      "AWS Amplify",
      "OpenSearch",
      "Postman",
      "Swagger",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "Department of Computer Engineering, University of Peradeniya",
    duration: "Feb 2023 – August 2025",
    photo: universityPhoto,
    details: [
      "Assisted in teaching Computer Architecture, Networks, Web Application Design, Data Structures, and Algorithms.",
    ],
    tech: ["Java", "Database", "MySQL", "Python", "HTML", "CSS", "JavaScript"],
  },
];

const Work = () => {
  return (
    <section className="work-section" id="work">
    <div className="work-container">
      <h2 className="work-title">Work Experience</h2>
      <div className="work-cards">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="work-photo-wrapper">
              <img src={exp.photo} alt={exp.company} className="work-photo" />
            </div>
            <h3 className="work-role">{exp.role}</h3>
            <h4 className="work-company">{exp.company}</h4>
            <p className="work-duration">{exp.duration}</p>
            <ul className="work-details">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="work-tech">
              {exp.tech.map((techItem, i) => (
                <span key={i} className="tech-badge">
                  {techItem}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Work;
