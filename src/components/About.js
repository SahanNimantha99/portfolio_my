import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I'm a final-year Computer Engineering student at the University of
        Peradeniya, specializing in Software Development, DevOps, and AI/ML. I
        craft scalable applications, AI-driven solutions, and innovative systems
        with a focus on performance and clean design.
      </p>
      <div className="about-skills">
        <span>💻 Python | JavaScript | TypeScript | Java</span>
        <span>🛠 ReactJS | Node.js | FastAPI | Django</span>
        <span>☁️ AWS | Docker | MongoDB | MySQL</span>
        <span>🤖 AI/ML | OpenAI | PEFT | RAG</span>
      </div>
    </div>
  );
};

export default About;
