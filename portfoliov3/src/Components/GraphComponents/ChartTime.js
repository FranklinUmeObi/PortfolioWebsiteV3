import React from 'react'
import { Line  } from '@reactchartjs/react-chart.js'


const data = {
  labels: ["ygiouZhUQJ","DxlkThDgPN","TQRXYnbLcj","mlXDkmvPNj","NjZpYEcuYg","OFiLoUUFXS","VdNJVhVtAI",
  "bORXxeqZdP","DUWhLTbssj","RamuHeyara","XAeoZXdErR","tfoDImWfmH","gPnKBoJGXJ","eCdSTosqHa",
  "JwQgbCCyZF","rqWiYpmztn","uUYBTQiCCD","BsbnLPyOhd","PRDANeEGjO","yUVlttNmof","fojkGvhMIx",
  "tDHjFnzyId","GRvFeTpBjx","FVyCQoCjFE","pXkdMgezIn","ExJRYMQaDI","gYwWCYddQw","rMbeIwVJgm",
  "RIpBQcTtqQ","kpIWhhlLIC","qzblviypbW","fNtkQyxmCv","BZpkyvfstk","gknshbTlhM","eBTqBrtYRh"],
  datasets: [
    {
      label: 'Commits',
      data: [10,31,9,41,29,11,45,40,25,21,27,39,14,11,42,5,13,24,27,36,41,12,44,33,24,13,13,30,45,10,50,35,28,4,38],
      fill: false,
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgba(255,215,0, 0.8)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
}

function ChartTime(props) {
    return (
        <div>
            <Line data={data} options = {props.options}/>
        </div>
    )
}

export default ChartTime
