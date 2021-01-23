import React from "react";
import Slide from "react-reveal/Slide";

import Commits from "./GraphComponents/ChartCommits.js";
import Languages from "./GraphComponents/ChartLanguages.js";
import Time from "./GraphComponents/ChartTime.js";

function StatsSection() {
  return (
    <Slide right cascade>
      <div className="section">

        <div className="intro glass">
          <h2 className="about-introText">Stats</h2>
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Number of commits in my repositories</h2>
          <Commits />
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Languages in my repositories</h2>
          <Languages />
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">My Commits over time</h2>
          <Time />
        </div>
      </div>
    </Slide>
  );
}

export default StatsSection;
