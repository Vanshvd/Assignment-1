import React from 'react';

export default function Overview() {
  const overview = {
    name: "Vash Dhiman",
    title: "Aspiring Web Developer",
    summary: "Passionate about building user-friendly applications and learning new technologies."
  };

  return (
    <div style={{ padding: "15px" }}>
      <h1 style={{ fontSize: "24px" }}>{overview.name}</h1>
      <h2 style={{ fontSize: "20px" }}>{overview.title}</h2>
      <p style={{ fontSize: "16px" }}>{overview.summary}</p>
    </div>
  );
}
