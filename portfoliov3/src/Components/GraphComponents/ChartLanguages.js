import React from 'react'
import { Bar  } from '@reactchartjs/react-chart.js'





function ChartLanguages(props) {
  
const data = {
  labels: ["ygiouZhUQJ","DxlkThDgPN","TQRXYnbLcj","mlXDkmvPNj","NjZpYEcuYg","OFiLoUUFXS","VdNJVhVtAI",
  "bORXxeqZdP","DUWhLTbssj","RamuHeyara","XAeoZXdErR","tfoDImWfmH","gPnKBoJGXJ","eCdSTosqHa",
  "JwQgbCCyZF","rqWiYpmztn","uUYBTQiCCD","BsbnLPyOhd","PRDANeEGjO","yUVlttNmof","fojkGvhMIx",
  "tDHjFnzyId","GRvFeTpBjx","FVyCQoCjFE","pXkdMgezIn","ExJRYMQaDI","gYwWCYddQw","rMbeIwVJgm",
  "RIpBQcTtqQ","kpIWhhlLIC","qzblviypbW","fNtkQyxmCv","BZpkyvfstk","gknshbTlhM","eBTqBrtYRh"],
  datasets: [
    {
      label: 'Javascript',
      data: [10,31,9,41,29,11,45,40,25,21,27,39,14,11,42,5,13,24,27,36,41,12,44,33,24,13,13,30,45,10,50,35,28,4,38],
      backgroundColor: props.coloursFill[2],
    },
    {
      label: 'Java',
      data: [2,22,12,39,12,11,19,43,29,44,24,3,7,22,40,50,49,39,43,49,2,4,6,42,23,8,46,35,28,36,50,17,18,26,28],
      backgroundColor: props.coloursFill[7],
    },
    {
      label: 'CSS',
      data: [29,45,33,32,1,8,47,21,47,29,8,38,5,48,32,39,19,21,12,34,10,47,4,21,45,18,4,1,50,4,31,16,19,21,19],
      backgroundColor: props.coloursFill[12],
    },
    {
      label: 'HTML',
      data: [3, 10, 13, 15, 22, 30,3, 10, 13, 15, 22, 30,3, 10, 13, 15, 22, 30,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
      backgroundColor: props.coloursFill[22],
    },
    {
      label: 'PHP',
      data: [2,22,12,39,12,11,19,43,29,44,24,3,7,22,40,50,49,39,43,49,2,4,6,42,23,8,46,35,28,36,50,17,18,26,28],
      backgroundColor: props.coloursFill[18],
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
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default ChartLanguages
