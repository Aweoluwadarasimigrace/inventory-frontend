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
    
     <table className="border-collapse border w-full mb-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">SKU</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          {totalProductAvailable.map((p, index) => (
            <tr key={p._id}>
              <td className="border px-4 py-2">{p._id}</td>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">{p.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="w-full h-96">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={totalProductAvailable}
              dataKey="totalQuantity"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {totalProductAvailable.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default DisplayTotalProductAvailable