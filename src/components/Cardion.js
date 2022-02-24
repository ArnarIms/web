import React from 'react';
// import '../css/cardion.css'
import '../css/cardions.scss';

function Cardion({ cardionOpen, setCardionOpen }) {
  return (
    <div className={"cardionMenu " + (cardionOpen && "active")}>
      <ul>
        <li>
          <a href="#about" onClick={() => setCardionOpen(false)}>About</a>
        </li>
        <li>
          <a href="#studies" onClick={() => setCardionOpen(false)}>Studies</a>
        </li>
        <li>
          <a href="#resume" onClick={() => setCardionOpen(false)}>Resume</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setCardionOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setCardionOpen(false)}>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Cardion;
