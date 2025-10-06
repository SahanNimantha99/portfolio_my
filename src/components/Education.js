import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "BSc Eng Hons Specializing in Computer Engineering",
    institution: "University of Peradeniya, Sri Lanka",
    duration: "June 2021 – August 2025",
    details: ["Current GPA: 3.50/4.0"],
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "St. Thomas’ Boys College, Matara",
    duration: "January 2010 – August 2019",
    details: ["District Rank: 51"],
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "St. Thomas’ Boys College, Matara",
    duration: "Completed 2019",
    details: ["9As"],
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <h4 className="education-institution">{edu.institution}</h4>
            <p className="education-duration">{edu.duration}</p>
            {edu.details.length > 0 && (
              <ul className="education-details">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
