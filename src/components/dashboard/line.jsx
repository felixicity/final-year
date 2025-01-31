import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const LineGraph = () => {
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {

    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 700 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        tension: 0.5,
        
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 500 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.5,
        yAxisID: 'y1',
      },
    ],
  };
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        max: 1500,
        
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div>
      <Line options={options} className='canvas' data={data} />
    </div>
  )
}

export default LineGraph
