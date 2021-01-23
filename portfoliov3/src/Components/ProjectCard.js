import React from "react";

function ProjectCard(props) {
  const tags = props.tags.map((data) => (
    <li className=" project-cardTag glass">{data}</li>
  ));

  return (

   
    <a href={`https://franklinumeobi.github.io/Projects/${props.link}/index.html`} target="_blank"rel="noreferrer">
      <div className=" project-card">
        <img className="project-cardImage" src={ require(`../Assets/Pimages/${props.image}`) } alt={props.title} />
        <h2 className="project-cardTitle">{props.title}</h2>
        <ul className="project-cardTags">{tags}</ul>
        <div className="projectDecContainer">
          <p className=" project-cardDesc">
            Description Description Description Description Description
          </p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
