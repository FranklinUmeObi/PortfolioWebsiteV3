import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";

import Commits from "./GraphComponents/ChartCommits.js";
import Languages from "./GraphComponents/ChartLanguages.js";
import Time from "./GraphComponents/ChartTime.js";

import {colours} from "../Assets/colours.js";

function StatsSection() {
  let [labelsState, setLabels] = useState({labels: ["test"]});
  let [commitsState, setCommits] = useState({commits:[0]});

  useEffect(() => {
    //Variables
    const token = process.env.REACT_APP_API_KEY;
    const headers = { Authorization: "Token " + token };
    const options = { method: "GET", headers: headers };
    let url = `https://api.github.com/users/franklinumeobi/repos`;

    //Fetch all my repos
    fetch(url, { options })
      .then((response) => response.json())

      .then((data) => {
        let labels = [];
        let commits = [];
        for (let i = 0; i < data.length; i++) {
          let name = data[i].name;
          labels.push(name);

          let url2 = `https://api.github.com/repos/franklinumeobi/${name}/commits`;
          fetch(url2, { options })
            .then((response) => response.json())
            .then((data2) => {
              let commitsInfo = data2.length;
              commits.push(commitsInfo);
            });
        }
        setLabels({ labels });
        setCommits({ commits });

      });
  }, []);

  return (
    <Slide right cascade>
      <div className="section">
        <div className="intro glass">
          <h2 className="about-introText">Stats</h2>
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Number of commits in my repositories</h2>
          <Commits
            commitsState={commitsState}
            labelsState={labelsState}
            coloursFill={colours}
            coloursBorder={colours}
          />
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">Languages in my repositories</h2>
          <Languages coloursFill={colours} coloursBorder={colours} />
        </div>

        <div className="chartContainer1 glass">
          <h2 className="chartTitle">My Commits over time</h2>
          <Time coloursFill={colours} coloursBorder={colours} />
        </div>
      </div>
    </Slide>
  );
}

export default StatsSection;
