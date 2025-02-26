import React from 'react';
import { Chart } from 'react-google-charts';

const MonthlyPieChart = () => {
  // Data for the pie chart with equal values for each month
  const data = [
    ['Month', 'Value'], // Column headers
    ['January', 1],
    ['February', 1],
    ['March', 1],
    ['April', 1],
    ['May', 1],
    ['June', 1],
    ['July', 1],
    ['August', 1],
    ['September', 1],
    ['October', 1],
    ['November', 1],
    ['December', 1],
  ];

  // Options for the pie chart
  const options = {
    title: 'Months of the Year',
    is3D: false, // Optional: Set to true for a 3D look
    slices: {
      0: { offset: 0.1 }, // Optional: Add some offset to make slices stand out (optional)
    },
    pieSliceText: 'label', // Display the month name inside each slice
    legend: {
      position: 'bottom', // Position the legend at the bottom
    },
    // pieSliceText: 'percentage', // Optional: Show the percentage (you can remove it)
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default MonthlyPieChart;
