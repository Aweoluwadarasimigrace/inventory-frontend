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

import { Line, Bar } from 'react-chartjs-2';


const SalesReport = () => {

const {monthlySales, dailySales, yearlySales, overview} =useGetSalesReport()

const dailyChartData ={
    labels: dailySales.map(sale => `${sale._id.day}/${sale._id.month}/${sale._id.year}`),
    datasets: [
        {
            label: 'Daily Revenue',
            data: dailySales.map(sale => sale.totalSales),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
}

const monthlyChartData ={

    labels: monthlySales.map(sale => `${sale._id.month}/${sale._id.year}`),
    datasets:[
        {
            label: 'Monthly Revenue',
            data: monthlySales.map(sale => sale.totalSales),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
}


const yearlyChartData ={
    labels: yearlySales.map(sale => sale._id.year),
    datasets:[
        {
            label: 'Yearly Revenue',
            data: yearlySales.map(sale => sale.totalSales),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
}

  return (
    <div className='p-6'>

        <h2 className='text-lg font-bold'>Sales Report</h2>


        {
            overview && (

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>

                    <div className='rounded border p-4 bg-white shadow'>
                        <h2 className="text-lg font-semibold">Total Revenue</h2>
                        <p className='text-2xl'>${overview.totalRevenue}</p>
                    </div>

                    <div className='rounded border p-4 bg-white shadow'>
                        <h2 className="text-lg font-semibold">Total Quantity Sold</h2>
                        <p className='text-2xl'>{overview.totalQuantity}</p>
                    </div>

                    <div className='rounded border p-4 bg-white shadow'>
                        <h2 className="text-lg font-semibold">Total Transaction</h2>
                        <p className='text-2xl'>{overview.totalTransactions}</p>
                    </div>
                </div>
            )
        }



        <div className='mb-8'>
            <h2 className="text-lg font-semibold mb-2">Daily Sales</h2>
            <Line data={dailyChartData} />
        </div>


        <div className='mb-8'>
            <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
            <Bar data={monthlyChartData} />
        </div>

        <div className='mb-8'>
            <h2 className="text-lg font-semibold mb-2">Yearly Sales</h2>
            <Bar data={yearlyChartData} />
        </div>
    </div>
  )
}

export default SalesReport



// labels: X-axis (dates).

// datasets: Y-axis values (total sales per day).

// borderColor & backgroundColor: Line styling.

// tension: Adds smooth curve to line chart.
