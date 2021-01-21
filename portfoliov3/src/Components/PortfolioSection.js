import React from "react";
import Rotate from "react-reveal/Rotate";

function PortfolioSection() {
  return (
    <div className="portfolio">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">Portfolio</h2>
        </div>
      </Rotate>
    </div>
  );
}

export default PortfolioSection;
