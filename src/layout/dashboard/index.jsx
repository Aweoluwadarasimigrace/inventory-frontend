import Loader from '@/sharedComponent/loader';
import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect, useMemo } from 'react'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const { fetchDashboardStats, salesData, loading, purchaseData, totalSales, totalPurchases, revenue } = useDashboardStore();

  useEffect(() => {
    // Fetch dashboard stats when the component mounts
    fetchDashboardStats();
  }, [fetchDashboardStats]);


  if (loading) {
    return (
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


  const last7Days = useMemo(() => {
    const days = [];

    [...Array(7)].forEach((_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (6 - i))
      const dateStr = d.toISOString().split("T")[0];
      days.push({
        fullDate: dateStr,          // keep full date for matching
        day: d.getDate(),           // 26
        month: d.toLocaleString("default", { month: "long" }),
        purchases: 0
      });

    })
    return days
  },[])


  const chartData = last7Days.map((day) => {
  const found = purchases.find((p) => p.date === day.fullDate);
  return {
    ...day,
    purchases: found ? found.purchases : 0,
  };
});

const chartMonth = last7Days[0].month;
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

       
        <div>
  <h2>{chartMonth}</h2>  {/* Month name on top */}
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={chartData}>
      <XAxis dataKey="day" />  {/* only shows 26, 27, ... */}
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="purchases" stroke="#8884d8" />
    </LineChart>
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