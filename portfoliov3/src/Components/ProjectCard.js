import React from "react";
import { Link } from 'react-router-dom';

function ProjectCard(props) {

    const tags = props.tags.map((data, index) => (
        <li className=" project-cardTag glass">{data}</li>
      ));

  return (
    <Link to={`../Assets/Projects/${props.link}/index.html`}>
      <div className=" project-card">
        <img src={props.image} alt="Project" className=" project-cardImage" />
        <h2 className=" project-cardTitle">{props.title}</h2>
        <td onClick={()=> window.open(`../Assets/Projects/${props.link}/index.html`, "_blank")}>text</td>

        <ul className="project-cardTags">
          {tags}
        </ul>
        <div className="projectDecContainer">
          <p className=" project-cardDesc">
            Description Description Description Description Description
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
