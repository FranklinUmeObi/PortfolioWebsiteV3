import React from "react";

import GithubMetricsVisualised from "../Assets/Pimages/GithubMetricsVisualised.png";
import CSBModuleLookup from "../Assets/Pimages/CSBModuleLookup.png";
import LaughingSocks from "../Assets/Pimages/LaughingSocks.png";
import EVE from "../Assets/Pimages/EVE.png";
import AudioVisualizer from "../Assets/Pimages/AudioVisualizer.png";
import Vertigo from "../Assets/Pimages/Vertigo.png";
import Chess from "../Assets/Pimages/Chess.png";
import DAudioVisualizer from "../Assets/Pimages/3DAudioVisualizer.png";

function ProjectCard(props) {
  const tags = props.tags.map((data, index) => (
    <li key={index} className=" project-cardTag">
      {data}
    </li>
  ));

  let image;
  if (props.image === Object.keys({ GithubMetricsVisualised }).pop() + ".png")
    image = GithubMetricsVisualised;
  else if (props.image === Object.keys({ CSBModuleLookup }).pop() + ".png")
    image = CSBModuleLookup;
  else if (props.image === Object.keys({ LaughingSocks }).pop() + ".png")
    image = LaughingSocks;
  else if (props.image === Object.keys({ EVE }).pop() + ".png") image = EVE;
  else if (props.image === Object.keys({ AudioVisualizer }).pop() + ".png")
    image = AudioVisualizer;
  else if (props.image === Object.keys({ Vertigo }).pop() + ".png")
    image = Vertigo;
  else if (props.image === Object.keys({ Chess }).pop() + ".png") image = Chess;
  else if (
    props.image ===
    "3" + Object.keys({ DAudioVisualizer }).pop() + ".png"
  )
    image = DAudioVisualizer;
  else {
  }
  return (
    <div className=" cardBox">
      <a
        href={`https://franklinumeobi.github.io/Projects/${props.link}/index.html`}
        target="_blank"
        rel="noreferrer"
      >
        <div className=" project-card">
          <div className=" project-cardfront">
            <img className="project-cardImage" src={image} alt={props.title} />
            <h2 className="project-cardTitle">{props.title}</h2>
            <ul className="project-cardTags">{tags}</ul>
            <div className="project-cardfine">
              <p>Hover for more details</p>
              <p>Click for live demo</p>
            </div>
          </div>

          <div className="project-cardback">
            <p className="project-cardDesc">{props.desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
