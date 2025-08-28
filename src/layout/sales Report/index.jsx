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
import useSalesStore from '@/store/getsales';
import Loader from '@/sharedComponent/loader';
import { Link } from 'react-router';


const SalesReport = () => {
  const { monthlySales, dailySales, yearlySales, overview } = useGetSalesReport();
  const {sales} = useSalesStore();



  if (!monthlySales || !dailySales || !yearlySales) {
    return (<Loader />);
  }

  // if(sales.length === 0){
  //   return (
  //       <><p className="p-4">No sales data available to generate reports.</p>
        
  //       <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg shadow-sm h-screen">
  //           <h1 className="text-2xl font-bold text-gray-800 mb-2">
  //               Start Managing Your Sales  Activities!
  //           </h1>
  //           <p className="text-gray-600 mb-1">
  //               Create, customize, and manage your sales  effectively.
  //           </p>
  //           <p className="text-gray-600 mb-4">
  //               Click the button below to add your first sales.
  //           </p>
  //           <Link to={"/dashboard/createsales"}>
  //               <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition">
  //                   Add Sales
  //               </button>
  //           </Link>
  //       </div></>

  //   )
  // }
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
        borderWidth: 0.5
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
        borderWidth: 0.5
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
        borderWidth: 0.5
      }
    ]
  };

  return (
    <div className=" lg:p-4 p-6 overflow-x-hidden">
  <h2 className="text-lg font-bold">Sales Report</h2>

  {overview && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div className="rounded p-4 bg-pink-500">
        <h2 className="text-lg font-semibold text-white">Total Revenue</h2>
        <p className="text-2xl text-white">${overview.totalRevenue}</p>
      </div>

      <div className="rounded p-4 bg-blue-300">
        <h2 className="text-lg font-semibold text-white">Total Quantity Sold</h2>
        <p className="text-2xl text-white">{overview.totalQuantity}</p>
      </div>

      <div className="rounded p-4 bg-purple-300">
        <h2 className="text-lg font-semibold text-white">Total Transaction</h2>
        <p className="text-2xl text-white">{overview.totalTransactions}</p>
      </div>
    </div>
  )}

  {/* Daily + Monthly side by side */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="rounded  p-4 bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Daily Sales</h2>
      <div className="w-full h-[300px]">
        <Bar data={dailyChartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>

    <div className="rounded p-4 bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
      <div className="w-full h-[300px]">
        <Bar data={monthlyChartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  </div>

  {/* Yearly below */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="rounded p-4 bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Yearly Sales</h2>
      <div className="w-full h-[250px]"> {/* Smaller height so it doesn’t push page */}
        <Bar data={yearlyChartData} options={{ maintainAspectRatio: false }} />
      </div>
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
