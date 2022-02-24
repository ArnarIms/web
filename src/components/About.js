import React, { useEffect, useRef } from 'react'
import { init } from 'ityped';
import '../css/about.scss';

function About() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: false, backDelay: 1500, strings: ['í leit að vinnu', 'metnaðargjarn', 'stundvís', 'fljótur að læra', 'jákvæður', 'góður í teymis vinnu'] })
  }, [])
  return (
    <div className="about" id="about">
      <div className="left-1">
        <div className="imgContainer">
          <img src="assets/arnar3.png" alt="" />
        </div>
      </div>
      <div className="right-1">
        <div className="container-1">
          <h2>Ég heiti </h2>
          <h1>Arnar Imsland</h1>
          <h3>Ég er <span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  )
}

export default About;
