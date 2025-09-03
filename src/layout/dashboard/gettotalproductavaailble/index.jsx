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
    
      <div className="bg-white p-6 rounded-xl shadow">
  <h2 className="text-xl font-bold mb-6 text-center">
    📦 Products Available in Stock
  </h2>

  {/* Chart on top */}
  <div className="w-full h-72 mb-8">
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={totalProductAvailable}
          dataKey="totalQuantity"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={({ name, value }) => `${value}`} // show only quantity
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

  {/* Table below */}
  <table className="border-collapse border w-full">
    <thead>
      <tr className="bg-purple-300 text-left">
        <th className="border px-4 py-2">SKU</th>
        <th className="border px-4 py-2">Product</th>
        <th className="border px-4 py-2">Available Quantity</th>
      </tr>
    </thead>
    <tbody>
      {totalProductAvailable.map((p) => (
        <tr key={p._id} className="hover:bg-gray-50">
          <td className="border px-4 py-2">{p._id}</td>
          <td className="border px-4 py-2">{p.name}</td>
          <td className="border px-4 py-2 font-bold text-blue-600">
            {p.totalQuantity}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )
}

export default DisplayTotalProductAvailable