import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

let chartData = [
  {
    id: '0',
    duration: 'May-June 2021',
    values: {
      'Basic Trees': '55',
      'Custom Short Pants': '31',
      'Super Hoodies': '14'
    }
  },
  {
    id: '1',
    duration: 'June-July 2021',
    values: {
      'Basic Trees': '50',
      'Custom Short Pants': '36',
      'Super Hoodies': '14'
    }
  },
  {
    id: '2',
    duration: 'July-August 2021',
    values: {
      'Basic Trees': '40',
      'Custom Short Pants': '31',
      'Super Hoodies': '29'
    }
  }
];

function PieChart() {
  const [chartValues, setChartValues] = useState(chartData[0].values);
  const handlePieChartChange = (e) => {
    setChartValues(chartData[e.target.value].values);
  };

  let data = {
    labels: Object.keys(chartValues),
    datasets: [
      {
        data: Object.values(chartValues),
        backgroundColor: ['#98D89E', '#EE8484', '#F6DC7D']
      }
    ]
  };

  let options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          fontSize: 12,
          color: 'black',
          generateLabels: function (chart) {
            let data = chart.data;
            return data.labels.map((label, i) => {
              return {
                text: label + ': ' + data.datasets[0].data[i] + '%',
                fillStyle: data.datasets[0].backgroundColor[i],
                hidden: false,
                lineWidth: 0
              };
            });
          },
          padding: 25
        }
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.formattedValue + '%';
          }
        }
      }
    },
    layout: {
      autoPadding: false
    },
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  return (
    <div className="bg-white rounded-xl col-span-1 p-5 px-8 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading font-bold text-xl">Top Products</h1>
        </div>
        <div>
          <select
            onChange={handlePieChartChange}
            className="outline-none text-lightGrey"
          >
            {chartData.map((chart) => (
              <option key={chart.id} value={chart.id}>
                {chart.duration}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
