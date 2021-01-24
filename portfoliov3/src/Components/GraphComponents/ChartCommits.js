import React  from "react";
import { Doughnut } from "@reactchartjs/react-chart.js";

function ChartCommits(props) {

const data = {
  labels: props.labelsState,
  datasets: [
    {
      label: "Commits",
      data: props.commitsState,
      backgroundColor: [
        "rgba(255,199,132,0.5)",
        "rgba(54,162,235,0.5)",
        "rgba(255,206,86,0.5)",
        "rgba(75,192,192,0.5)",
        "rgba(153,112,255,0.5)",
        "rgba(25,159,64,0.5)",
        "rgba(34,99,132,0.5)",
        "rgba(122,2,2,0.5)",
        "rgba(123,206,86,0.5)",
        "rgba(122,12,123,0.5)",
        "rgba(38,30,201,0.5)",
        "rgba(200,19,64,0.5)",
        "rgba(255,199,132,0.5)",
        "rgba(54,162,235,0.5)",
        "rgba(255,206,86,0.5)",
        "rgba(75,192,92,0.5)",
        "rgba(253,102,255,0.5)",
        "rgba(155,159,64,0.5)",
        "rgba(34,9,132,0.5)",
        "rgba(122,2,2,0.5)",
        "rgba(123,206,86,0.5)",
        "rgba(122,12,123,0.5)",
        "rgba(138,30,201,0.5)",
        "rgba(200,159,64,0.5)",
        "rgba(255,99,132,0.5)",
        "rgba(54,162,235,0.5)",
        "rgba(255,206,86,0.5)",
        "rgba(75,192,192,0.5)",
        "rgba(153,102,255,0.5)",
        "rgba(255,159,64,0.5)",
        "rgba(34,99,132,0.5)",
        "rgba(122,2,2,0.5)",
        "rgba(123,206,86,0.5)",
        "rgba(122,12,123,0.5)",
        "rgba(38,30,21,0.5)",
        "rgba(200,159,4,0.5)",
      ],
      borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
      ],
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
