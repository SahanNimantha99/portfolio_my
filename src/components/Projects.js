import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Smart Waste Management System",
    subtitle: "GreenBin Technology | Group | Nov 2023 - Aug 2024",
    description: [
      "Enhanced efficiency of waste collection with IoT-enabled smart bins.",
      "Developed frontend for web & mobile apps, integrated IoT sensors, set up cloud services, and finalized hardware.",
    ],
    tech: "ReactJS, NodeJS, Express, MongoDB, HTML, CSS, AWS IoT Core, PlatformIO(Arduino,C++), MQTT",
  },
  {
    title: "FYP: RAG Pipeline for Generate Verilog Codes",
    subtitle: "Group | Dec 2024 – Aug 2025",
    description: [
      "Automated Verilog code variation generation using fine-tuned Large Language Models (LLMs).",
      "Implemented PyVerilog-based, direct Verilog, and X-Form-based transformation approaches with RAG pipeline and testing framework.",
    ],
    tech: "Verilog, Python, PyVerilog, Verilator, VCS, VCS SpyGlass, Google BigQuery",
  },
  {
    title: "Hospital Management System",
    subtitle: "MediCare | Group | May 2023 - July 2023",
    description: [
      "Web application to improve patient healthcare and hospital management.",
      "Developed frontend and integrated with backend using MySQL and NodeJS.",
    ],
    tech: "ReactJS, NodeJS, Express, MySQL, HTML, CSS",
  },
  {
    title: "Baby Development Tracking System",
    subtitle: "Growing Up | Group | May 2023 - July 2023",
    description: [
      "Mobile app to track baby development: vaccinations, growth, medications, AI chatbot.",
      "Developed frontend, backend, and database using Firebase.",
    ],
    tech: "Java, Android Studio, Firebase",
  },
  {
    title: "Subclinical Mastitis Prediction Tool",
    subtitle: "SCMP GUI | Group | Aug 2023 - Sep 2023",
    description: [
      "GUI that integrates a prediction model for subclinical mastitis in dairy cows.",
      "Developed GUI with batch dataset import, preview, and processing features.",
    ],
    tech: "Django, Python, CSS",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <h4 className="project-subtitle">{project.subtitle}</h4>
            <ul className="project-description">
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <p className="project-tech">{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
