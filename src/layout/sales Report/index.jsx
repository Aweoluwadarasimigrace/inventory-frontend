import React from 'react'

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import { useGetSalesReport } from './hooks/useGetSalesReport';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import { Bar } from 'react-chartjs-2';


const SalesReport = () => {
  const { monthlySales, dailySales, yearlySales, overview } = useGetSalesReport();

  // Daily chart with sales & quantity
  const dailyChartData = {
    labels: dailySales.map(
      (sale) => `${sale._id.day}/${sale._id.month}/${sale._id.year}`
    ),
    datasets: [
      {
        label: "Daily Revenue",
        data: dailySales.map((sale) => sale.totalSales),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Daily Quantity",
        data: dailySales.map((sale) => sale.totalQuantity),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  // Monthly chart with sales & quantity
  const monthlyChartData = {
    labels: monthlySales.map((sale) => `${sale._id.month}/${sale._id.year}`),
    datasets: [
      {
        label: "Monthly Revenue",
        data: monthlySales.map((sale) => sale.totalSales),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Monthly Quantity",
        data: monthlySales.map((sale) => sale.totalQuantity),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  // Yearly chart with sales & quantity
  const yearlyChartData = {
    labels: yearlySales.map((sale) => sale._id.year),
    datasets: [
      {
        label: "Yearly Revenue",
        data: yearlySales.map((sale) => sale.totalSales),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Yearly Quantity",
        data: yearlySales.map((sale) => sale.totalQuantity),
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Sales Report</h2>

      {overview && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="rounded border p-4 bg-white shadow">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-2xl">${overview.totalRevenue}</p>
          </div>

          <div className="rounded border p-4 bg-white shadow">
            <h2 className="text-lg font-semibold">Total Quantity Sold</h2>
            <p className="text-2xl">{overview.totalQuantity}</p>
          </div>

          <div className="rounded border p-4 bg-white shadow">
            <h2 className="text-lg font-semibold">Total Transactions</h2>
            <p className="text-2xl">{overview.totalTransactions}</p>
          </div>
        </div>
      )}

      {/* Daily & Monthly side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded border p-4 bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Daily Sales</h2>
          <Bar data={dailyChartData} options={options} />
        </div>

        <div className="rounded border p-4 bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
          <Bar data={monthlyChartData} options={options} />
        </div>
      </div>

      {/* Yearly below */}
      <div className="rounded border p-4 bg-white shadow">
        <h2 className="text-lg font-semibold mb-2">Yearly Sales</h2>
        <Bar data={yearlyChartData} options={options} />
      </div>
    </div>
  );
};

export default SalesReport;



// labels: X-axis (dates).

// datasets: Y-axis values (total sales per day).

// borderColor & backgroundColor: Line styling.

// tension: Adds smooth curve to line chart.
