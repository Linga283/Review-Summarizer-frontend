import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ like, dislike }) => {
  const data = {
    labels: ['Like %', 'Dislike %'],
    datasets: [
      {
        data: [like, dislike],
        backgroundColor: ['#43c6ac', '#ff6384'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ maxWidth: 260, margin: '24px auto' }}>
      <Pie data={data} options={{ plugins: { legend: { position: 'bottom' } } }} />
    </div>
  );
};

export default PieChart;
