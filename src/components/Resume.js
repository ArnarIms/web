import React, { useState } from 'react'
import '../css/resume.scss';

function Resume() {
  const [currentSlider, setCurrentSlider] = useState(0)
  const data = [
    {
      id: "1",
      title: "Landsnet",
      desc: "Starfið fólst í því að sjáum tengivirkin um allt land sem eru í eigu Landsnet. Sem flokkstjóri bar ég ábyrgð á 5 – 10 krökkum hvern dag. Sem Verkstjóri í forsvari bar ég ábyrgð á öllum verkum svo og 62 krökkum sem voru í sumarvinnu.",
      img: "assets/laandsnet.png",
      position:"Verkstjóri í útsvari"
    },
    {
      id: "2",
      title: "Ölgerðin",
      desc: "Ölgerðin framleiðir, flytur inn, dreyfir og selur drykkjavörur og matvæli um allt land. Áhersla er lögð á að vörur fyrirtækisins séu fyrsta flokks og að viðskiptavinir þess geti gengið að hágæða þjónustu vísri.",
      img: "assets/olgerdin.png",
      position: "Starsmaður í framleiðslu"
    },
    {
      id: "3",
      title: "Eimskip",
      desc: "Ábyrgð á því að allir pakkar séu til staðar. Ábyrgð á að tjón sé tilkynnt. Ábyrgð að týndir pakkar séu fundnir.",
      img: "assets/eimskip.png",
      position:"Starfsmaður í vöruhúsi"
    },
    {
      id: "4",
      title: "Sportbarinn Ölver",
      desc: "Sportbarinn Ölver í Glæsibæ er elsta krá landsins og hefur verið starfrækt síðan 1984.",
      img: "assets/sport.jpg",
      position:"Barþjónn/vaktstjóri"
    },
  ];
  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
      setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
  }
  return (
    <div className="resume" id="resume">
      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map((d) => (
          <div className="container-3">
            <div className="resumeitems">
              <div className="left-3">
                <div className="left-3Container">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.position}</span>
                </div>
              </div>
              <div className="right-3">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/preview.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/preview.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  )
}

export default Resume;
