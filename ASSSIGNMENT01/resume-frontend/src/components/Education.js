import React from 'react';

export default function Education() {
  const education = [
    { school: "University of Example", degree: "B.Sc Computer Science", year: "2020-2024" },
    { school: "Example High School", degree: "High School Diploma", year: "2016-2020" }
  ];

  return (
    <div style={{ padding: "15px" }}>
      <h2 style={{ fontSize: "20px" }}>Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
          <h3 style={{ fontSize: "18px" }}>{edu.school}</h3>
          <p>{edu.degree} | {edu.year}</p>
        </div>
      ))}
    </div>
  );
}
