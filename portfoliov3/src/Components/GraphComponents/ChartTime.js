import React, {useState } from "react";
import { Line  } from '@reactchartjs/react-chart.js'




function ChartTime(props) {

  let [data, setData] = useState({ 
    data: {
      labels: props.datesState.dates,
      datasets: [
        {
          label: 'Commits Pushed',
          data: props.datesComState.commitsPerDay,
          fill: false,
          backgroundColor: 'rgb(255,255,0)',
          borderColor: 'rgba(127,255,0,0.7)',
        },
        {
          label: 'Pull Requests Merged',
          data: props.datesMerState.mergePerDay,
          fill: false,
          backgroundColor: 'rgb(0,255,255)',
          borderColor: 'rgba(127,0,255,0.7)',
        },
        {
          label: 'Repo/Branch Created',
          data: props.datesCreState.createPerDay,
          fill: false,
          backgroundColor: 'rgb(255,0,255)',
          borderColor: 'rgba(255,0,127,0.7)',
        },
      ],
    } });
  
  const options = {
    legend: {
      labels: {
          fontColor: 'white',
          fontSize: 9,
      },
    },
    scaleLabel: {
      fontColor: 'white',
      fontSize: 7,
    },
    scales: {

      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            fontColor: 'white',
            fontSize: 7,
          },
          scaleLabel: {   // To format the scale Lebel
            fontColor: 'white',
            fontSize: 7,
        },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontSize: 7,
          },
          scaleLabel: {   // To format the scale Lebel
            fontColor: 'white',
            fontSize: 7,
        },
        },
      ],
    },
  }

    return (
        <div>
            <Line data={data.data} options = {options}/>
        </div>
    )
}

export default ChartTime
