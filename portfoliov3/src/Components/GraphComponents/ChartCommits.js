import React, {useState } from "react";
import { Doughnut } from "@reactchartjs/react-chart.js";

function ChartCommits(props) {
  let [data, setData] = useState({ 
    data: {
      labels: props.labelsState.labels,
      datasets: [
        {
          label: "Commits",
          data: props.commitsState.commits,
          backgroundColor: props.coloursFill,
          borderColor: props.coloursBorder,
          borderWidth: 2,
          
        },
      ],
    } });

  return (
    <div key={props.commitsState[0]}>
        
        <Doughnut data={data.data} options={{ maintainAspectRatio: false, legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'white',
                fontSize: 7,
            }
        } }}/>
      
    </div>
  );
}

export default ChartCommits;
