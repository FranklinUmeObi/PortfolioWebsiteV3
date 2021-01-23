import React from 'react'
import { Line  } from '@reactchartjs/react-chart.js'


const data = {
  labels: ['1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Commits',
      data: [12, 19, 3, 15, 12, 3,12, 19, 3, 15, 22, 3,12, 19, 32, 5, 2, 3,12, 19, 3, 25, 32, 3,12, 19, 33, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgba(255, 99, 255, 0.5)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

function ChartTime() {
    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default ChartTime
