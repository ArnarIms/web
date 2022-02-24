import './App.css';
import React, { useState } from 'react';
import Bar from './components/Bar';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Studies from './components/Studies';
import Projects from './components/Projects';
import Cardion from './components/Cardion';

function App() {
  const [cardionOpen, setCardionOpen] = useState(true);
  return (
    <div className="App">
      <Bar cardionOpen={cardionOpen} setCardionOpen={setCardionOpen} />
      <Cardion cardionOpen={cardionOpen} setCardionOpen={setCardionOpen} />
      <div className="section">
        <About />
        <Resume />
        <Studies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
