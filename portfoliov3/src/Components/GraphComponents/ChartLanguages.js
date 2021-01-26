import React from 'react'
import { Bar  } from '@reactchartjs/react-chart.js'





function ChartLanguages(props) {
  
const data = {
  labels: props.labelsState.labels,
  datasets: props.langDataState.dataset,
}

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          fontColor: 'white',
            fontSize: 7,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks:{
          fontColor: 'white',
            fontSize: 7,
        }
      },
    ],
  },
}
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default ChartLanguages
