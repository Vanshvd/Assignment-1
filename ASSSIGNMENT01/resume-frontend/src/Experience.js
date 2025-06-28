import React from 'react';

export default function Experience() {
  const experience = [
    { company: "Tech Co", role: "Frontend Developer", year: "2024-Present" },
    { company: "Web Solutions", role: "Intern", year: "2023" }
  ];

  return (
    <div style={{ padding: "15px" }}>
      <h2 style={{ fontSize: "20px" }}>Experience</h2>
      {experience.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
          <h3 style={{ fontSize: "18px" }}>{exp.company}</h3>
          <p>{exp.role} | {exp.year}</p>
        </div>
      ))}
    </div>
  );
}
