import React from "react";
import Rotate from "react-reveal/Rotate";
import ProjectCard from "./ProjectCard";
import p from "../Assets/projects.json";

function PortfolioSection() {
  const cards = p.data.map((data, index) => (
    <ProjectCard
      key={index}
      title={data.title}
      desc={data.desc}
      link={data.link}
      image={data.image}
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
      <Rotate bottom left>
        <div className="cardContainer glass">{cards}</div>
      </Rotate>
    </div>
  );
}

export default PortfolioSection;
