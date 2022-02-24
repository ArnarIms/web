import React from 'react'
import '../css/projectList.scss'

function ProjectList({ title, id, active, setSelected }) {
  return (
    <li className={active ? "list active" : "list"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}

export default ProjectList;
