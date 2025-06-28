import React from 'react';
import Overview from './components/Overview';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <Overview />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
