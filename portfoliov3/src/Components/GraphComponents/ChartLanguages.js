import React from 'react'
import { Bar  } from '@reactchartjs/react-chart.js'




const data = {
  labels: ['1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6','1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4,3, 10, 13, 15, 22, 30,3, 10, 13, 15, 22, 30,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30,3, 10, 13, 15, 22, 30,3, 10, 13, 15, 22, 30,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
}

function ChartLanguages() {
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default ChartLanguages
