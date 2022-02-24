import React from 'react'
import '../css/studies.scss';
import { Link } from "react-router-dom";

function Studies() {
  const data = [
    {
      id: 1,
      name: "Lögfræði",
      title: "Háskólinn í Reykjavík ",
      img: "assets/hr.png",
      desc: "Hóf nám mitt 2016 og er óklárað",
    },
    {
      id: 2,
      name: "Forritun",
      title: "NTV",
      img: "assets/ntv.png",
      desc: "Útskrifaðist úr námi hjá NTV febrúar 2022 með diplómu á háskólastigi í forritun.",
      featured: true,
    },
    {
      id: 3,
      name: "Félagsfræðibraut",
      title: "Kvennaskólinn í Reykjavík",
      img: "assets/kvenno.png",
      desc: "Árið 2012 útskrifaðist ég úr Kvennaskólanum í Reykjavík",
    }
  ]
  return (
    <div className="studies" id="studies">
      <div className="container-4">
        {data.map((p) => (
          <div className={p.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="" className="left" alt="" />
              <img src={p.img} className="user" alt="" />
            </div>
            <div className="center">{p.desc}</div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Studies;
