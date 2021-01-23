import React from "react";
import Rotate from "react-reveal/Rotate";
import ProjectCard from "./ProjectCard";
import p from "../Assets/projects.json"

import img from "../Assets/Pimages/1.PNG";

function PortfolioSection() {


  const cards = p.data.map((data) => (
    <ProjectCard
      title={data.title}
      image={img}
      desc={data.description}
      link={data.link}
      tags={data.tags}
    />
  ));





  return (
    <div className="section">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">Portfolio</h2>
        </div>
      </Rotate>

      <div className="cardContainer glass">
        {cards}
      </div>
    </div>
  );
}

export default PortfolioSection;
