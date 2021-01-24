import React  from "react";
import { Doughnut } from "@reactchartjs/react-chart.js";

function ChartCommits(props) {

const data = {
  labels: props.labelsState,
  datasets: [
    {
      label: "Commits",
      data: props.commitsState,
      backgroundColor: props.coloursFill,
      borderColor: props.coloursBorder,
      borderWidth: 2,
    },
  ],
};

  return (
    <div >
        {props.commitsState !== []
        ? <h2>Loading...</h2>
        : <Doughnut data={data} options={{ maintainAspectRatio: false }}/>
      }
    </div>
  );
}

export default ChartCommits;
