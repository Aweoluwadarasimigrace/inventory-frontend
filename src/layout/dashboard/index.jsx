import Loader from '@/sharedComponent/loader';
import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const { fetchDashboardStats,salesData, loading, purchaseData, totalSales, totalPurchases, revenue } = useDashboardStore();

  useEffect(() => {
    // Fetch dashboard stats when the component mounts
    fetchDashboardStats();
  }, [fetchDashboardStats]);


  if(loading){
    return(
      <Loader />
    )
  }

const sales = salesData?.map((s) => ({
    date: s._id,
    sales: s.sales,
  }));

//   // Format purchases data
  const purchases = purchaseData?.map((p) => ({
    date: p._id,
    purchases: p.purchases,
  }));

//   // Revenue vs cost data
  const revenueData = [
    {
      name: "Total",
      sales: totalSales.totalSales || 0,
      purchases: totalPurchases.totalPurchases || 0,
      revenue: revenue || 0,
    },
  ];
  return (
    <>


 <div className="p-6 space-y-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-2xl">${totalSales.totalSales || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold">Total Purchases</h2>
          <p className="text-2xl">${totalPurchases.totalPurchases || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-bold">Revenue</h2>
          <p className="text-2xl">${revenue || 0}</p>
        </div>
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Sales Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Purchases Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={purchases}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="purchases" fill="#FF9800" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Revenue vs Cost</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4CAF50" name="Sales" />
            <Bar dataKey="purchases" fill="#FF9800" name="Purchases" />
            <Bar dataKey="revenue" fill="#2196F3" name="Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    </>
    
  )
}

export default Dashboard