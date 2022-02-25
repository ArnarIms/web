import React from 'react';
// import '../css/cardion.css'
import '../css/cardions.scss';

function Cardion({ cardionOpen, setCardionOpen }) {
  return (
    <div className={"cardionMenu " + (cardionOpen && "active")}>
      <ul>
        <li>
          <a href="#about" onClick={() => setCardionOpen(false)}>Um mig</a>
        </li>
        <li>
          <a href="#studies" onClick={() => setCardionOpen(false)}>Námsferill</a>
        </li>
        <li>
          <a href="#resume" onClick={() => setCardionOpen(false)}>Ferilskrá</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setCardionOpen(false)}>Verkefni</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setCardionOpen(false)}>Hafa samband</a>
        </li>
      </ul>
    </div>
  )
}

export default Cardion;
