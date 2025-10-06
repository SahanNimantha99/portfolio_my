import React from "react";
import "./Work.css";

const experiences = [
  {
    role: "Intern Software Engineer | Hybrid",
    company: "Neura Intelligence (Pvt) Ltd, Sri Lanka",
    duration: "June 2024 – August 2025",
    details: [
      "Contributed to Full Stack Development, Quality Engineering tasks (testing), deployment and maintenance, and project management.",
      "Automated Form Filling Tool (FFT) – Frontend enhancements, optimized AI prompt generation, manual testing, and AWS deployment.",
      "Automated Food Order Module (FOM) – Improved UI, integrated OpenAI scripts for intelligent order comparison, AWS deployment.",
      "Financial Information Platform (FIP) – Developed tagging features, resolved UI issues, managed AWS deployment, comprehensive testing.",
    ],
    tech: [
      "ReactJS, NodeJS, Express, HTML, CSS, DocumentDB, MongoDB, OpenAI, Google Cloud Speech API, GitHub, FastAPI, AWS Amplify, OpenSearch, Postman, Swagger",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "Department of Computer Engineering, University of Peradeniya",
    duration: "Feb 2023 – August 2025",
    details: [
      "Assisted in teaching Computer Architecture, Networks, Web Application Design, Data Structures, and Algorithms.",
    ],
    tech: [],
  },
];

const Work = () => {
  return (
    <div className="work-container">
      <h2 className="work-title">Work Experience</h2>
      <div className="work-cards">
        {experiences.map((exp, index) => (
          <div key={index} className="work-card">
            <h3 className="work-role">{exp.role}</h3>
            <h4 className="work-company">{exp.company}</h4>
            <p className="work-duration">{exp.duration}</p>
            <ul className="work-details">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {exp.tech.length > 0 && (
              <p className="work-tech">
                <strong>Technologies & Tools:</strong> {exp.tech.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
