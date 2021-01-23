import React from "react";
import Rotate from "react-reveal/Rotate";

import Commits from './GraphComponents/ChartCommits.js'
import Languages from './GraphComponents/ChartLanguages.js'
import Time from './GraphComponents/ChartTime.js'

function StatsSection() {
  return (
    <div className="section">
      <Rotate bottom right>
        <div className="intro glass">
          <h2 className="about-introText">Stats</h2>
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Number of commits in my repositories</h2>
          <Commits/>
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Languages in my repositories</h2>
          <Languages/>
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">My Commits over time</h2>
          <Time/>
        </div>

<h2>Pie chart to track commits per repo</h2>
<h2>Stacked bar chart for languages per repo (Normalize probably)</h2>
<h2>Line chart tracking Commits over last 3 months</h2>

      </Rotate>
    </div>
  );
}

export default StatsSection;
