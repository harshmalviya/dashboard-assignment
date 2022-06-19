import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

let graphData = [
  {
    id: '0',
    duration: 'May-June 2021',
    data: [
      {
        label: 'User',
        data: [100, 410, 150, 430, 190],
        borderColor: '#98D89E',
        backgroundColor: '#98D89E'
      },
      {
        label: 'Guest',
        data: [200, 400, 200, 300, 220],
        borderColor: '#EE8484',
        backgroundColor: '#EE8484'
      }
    ]
  },
  {
    id: '1',
    duration: 'June-July 2021',
    data: [
      {
        label: 'User',
        data: [130, 195, 310, 385],
        borderColor: '#98D89E',
        backgroundColor: '#98D89E'
      },
      {
        label: 'Guest',
        data: [118, 220, 350, 380],
        borderColor: '#EE8484',
        backgroundColor: '#EE8484'
      }
    ]
  },
  {
    id: '2',
    duration: 'July-August 2021',
    data: [
      {
        label: 'User',
        data: [145, 230, 380, 430],
        borderColor: '#98D89E',
        backgroundColor: '#98D89E'
      },
      {
        label: 'Guest',
        data: [140, 222, 340, 399],
        borderColor: '#EE8484',
        backgroundColor: '#EE8484'
      }
    ]
  }
];

function LineGraph() {
  const [selectedDataset, setSelectedDataset] = useState(graphData[0].data);
  let data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: selectedDataset
  };

  let options = {
    elements: {
      line: { tension: '.5', borderWidth: 2 },
      point: { radius: 0 }
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end'
      }
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          max: 500,
          min: 0
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const handleLineChartDataChange = (e) => {
    setSelectedDataset(graphData[e.target.value].data);
  };

  return (
    <section className="bg-white rounded-xl p-5 px-8 mb-10">
      <div>
        <h1 className="font-heading font-bold text-xl">Activities</h1>
      </div>
      <div>
        <select
          className="outline-none text-lightGrey"
          onChange={handleLineChartDataChange}
        >
          {graphData.map((graph) => (
            <option key={graph.id} value={graph.id}>
              {graph.duration}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 ">
        <Line data={data} options={options} height="170" />
      </div>
    </section>
  );
}

export default LineGraph;
