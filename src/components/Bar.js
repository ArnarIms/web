import React, { useState } from 'react';
import '../css/bars.scss';
import { Person, Mail } from '@material-ui/icons';

function Bar({ cardionOpen, setCardionOpen }) {
  return (
    <div className={"header " + (cardionOpen && "active")}>
      <div className="container">
        <div className="left">
          <a href="#about" className="logo">Velkomin</a>
          <div className="infocontainer">
            <Mail className="icon" />
            <span>arnarimsland@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="cardion" onClick={() => setCardionOpen(!cardionOpen)}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar;
