import React, {useState } from "react";
import { Line  } from '@reactchartjs/react-chart.js'




function ChartTime(props) {

  let [data, setData] = useState({ 
    data: {
      labels: props.datesState.dates,
      datasets: [
        {
          label: 'Commits',
          data: props.datesComState.commitsPerDay,
          fill: false,
          backgroundColor: 'rgb(255,255,255)',
          borderColor: 'rgba(127,255,0,0.5)',
        },
      ],
    } });
  
  const options = {
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
