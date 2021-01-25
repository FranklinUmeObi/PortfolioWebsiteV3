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
                fontColor: 'white',
                fontSize: 7,
            },
            //display: false
        } }}/>
      
    </div>
  );
}

export default ChartCommits;
