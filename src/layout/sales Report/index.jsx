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

import {  Bar } from 'react-chartjs-2';


const SalesReport = () => {
  const { monthlySales, dailySales, yearlySales, overview } = useGetSalesReport();

  // Format daily sales labels like "August 5"
  const dailyChartData = {
    labels: dailySales.map(sale => {
      const date = new Date(sale._id.year, sale._id.month - 1, sale._id.day); 
      return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    }),
    datasets: [
      {
        label: 'Daily Revenue',
        data: dailySales.map(sale => sale.totalSales),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  // Format monthly sales labels like "August"
  const monthlyChartData = {
    labels: monthlySales.map(sale => {
      const date = new Date(sale._id.year, sale._id.month - 1); 
      return date.toLocaleDateString("en-US", { month: "long" });
    }),
    datasets: [
      {
        label: 'Monthly Revenue',
        data: monthlySales.map(sale => sale.totalSales),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  // Format yearly sales labels like "2023", "2024"
  const yearlyChartData = {
    labels: yearlySales.map(sale => `${sale._id.year}`),
    datasets: [
      {
        label: 'Yearly Revenue',
        data: yearlySales.map(sale => sale.totalSales),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Sales Report</h2>

      {overview && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="rounded  p-4 bg-pink-500">
            <h2 className="text-lg font-semibold text-white">Total Revenue</h2>
            <p className="text-2xl">${overview.totalRevenue}</p>
          </div>

          <div className="rounded p-4 bg-blue-300">
            <h2 className="text-lg font-semibold text-white">Total Quantity Sold</h2>
            <p className="text-2xl">{overview.totalQuantity}</p>
          </div>

          <div className="rounded border p-4 bg-purple-300">
            <h2 className="text-lg font-semibold text-white">Total Transaction</h2>
            <p className="text-2xl">{overview.totalTransactions}</p>
          </div>
        </div>
      )}

      {/* Daily + Monthly side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded border p-4 bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Daily Sales</h2>
          <Bar data={dailyChartData} />
        </div>

        <div className="rounded border p-4 bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
          <Bar data={monthlyChartData} />
        </div>
      </div>

      {/* Yearly below */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div className="rounded border p-4 bg-white shadow">
        <h2 className="text-lg font-semibold mb-2">Yearly Sales</h2>
        <Bar data={yearlyChartData} />
      </div>

      </div>
    </div>
  );
};

export default SalesReport;



// labels: X-axis (dates).

// datasets: Y-axis values (total sales per day).

// borderColor & backgroundColor: Line styling.

// tension: Adds smooth curve to line chart.
