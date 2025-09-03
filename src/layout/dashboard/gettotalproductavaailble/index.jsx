import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const DisplayTotalProductAvailable = () => {
  const { totalProductAvailable , fetchtotalProductAvailable} = useDashboardStore();


useEffect(() => {
  fetchtotalProductAvailable();
}, [fetchtotalProductAvailable]);

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#F1948A"];
  return (
    <>
    
      <div className="flex flex-col lg:flex-row gap-6">
      {/* Table Section */}
      <div className="w-full lg:w-1/2 bg-white shadow rounded p-4">
        <h2 className="text-lg font-bold mb-4 text-center">📦 Products Available in Stock (Table)</h2>
        <table className="border-collapse border w-full">
          <thead>
            <tr className="bg-blue-200 text-gray-800">
              <th className="border px-4 py-2">SKU</th>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {totalProductAvailable.map((p, index) => (
              <tr
                key={p._id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
              >
                <td className="border px-4 py-2">{p._id}</td>
                <td className="border px-4 py-2">{p.name}</td>
                <td className="border px-4 py-2 text-center font-semibold">
                  {p.totalQuantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart Section */}
      <div className="w-full lg:w-1/2 bg-white shadow rounded p-4">
        <h2 className="text-lg font-bold mb-4 text-center">📊 Products Available in Stock (Chart)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={totalProductAvailable}
              dataKey="totalQuantity"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={130}
              label={({ value }) => value} // shows quantity on top of slice
            >
              {totalProductAvailable.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  )
}

export default DisplayTotalProductAvailable