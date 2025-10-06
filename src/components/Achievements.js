import React from "react";
import "./Achievements.css";

const achievementsData = [
  {
    title: "Fourth Place – ACES Hackathon",
    subtitle: "04 / 150+ participants | 2023",
  },
  {
    title: "Participation – SLIIT DevQuest",
    subtitle: "18 / 300+ participants | 2023",
  },
  {
    title: "Participation – ACES Coders v10.0",
    subtitle: "30 / 500+ participants | 2024",
  },
  {
    title: "Participation – ACES Coders v9.0",
    subtitle: "34 / 500+ participants | 2022",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements</h2>
        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <div key={index} className="achievement-card">
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
