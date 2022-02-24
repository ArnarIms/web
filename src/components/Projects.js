import React, { useEffect, useState } from 'react'
import '../css/projects.scss'
import ProjectList from './ProjectList';
import {
  calculator,
  flutter,
  popo,
  vutify,
  twitter
} from '../ListData';

function Projects() {
  const [selected, setSelected] = useState("webapp")
  const [data, setData] = useState([]);
  const list = [
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "mobileapp",
      title: "Mobile App",
    },
    {
      id: "Design",
      title: "Design",
    },
    {
      id: "vutify",
      title: "Vutify verkefni",
    },
    {
      id: "backend",
      title: "Backend",
    }
  ];
  useEffect(() => {
    switch (selected) {
      case "webapp":
        setData(calculator);
        break;
      case "mobileapp":
        setData(flutter);
        break;
      case "design":
        setData(popo);
        break;
      case "vutify":
        setData(vutify);
        break;
      case "backend":
        setData(twitter);
        break;
      default:
        setData(popo);
    }
  }, [selected])
  return (
    <div className="projects" id="projects">
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} />
        ))}
      </ul>
      <div className="container-1">
        {data.map((d) => (
          <div className="items">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <a href={d.link}>
              <br />
              <button>GIT</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
