
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function ChartView({ data }) {
  const chartData = {
    labels: ['Cases', 'Recovered', 'Deaths', 'Active'],
    datasets: [
      {
        label: data.country,
        data: [data.cases, data.recovered, data.deaths, data.active],
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card p-3">
      <h5>{data.country} - Summary</h5>
      <Line data={chartData} />
      <div className="mt-3">
        <p><strong>Cases:</strong> {data.cases.toLocaleString()}</p>
        <p><strong>Recovered:</strong> {data.recovered.toLocaleString()}</p>
        <p><strong>Deaths:</strong> {data.deaths.toLocaleString()}</p>
        <p><strong>Active:</strong> {data.active.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ChartView;
