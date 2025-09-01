import Loader from '@/sharedComponent/loader';
import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect, useMemo } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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
        month: d.toLocaleString("default", { month: "long", year: "numeric" }),
        purchases: 0
      });

    })
    return days
  },[])


  
  const last7DaysSales = useMemo(() => {
    const days = [];

    [...Array(7)].forEach((_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (6 - i))
      const dateStr = d.toISOString().split("T")[0];
      days.push({
        fullDate: dateStr,          // keep full date for matching
        day: d.getDate(),           // 26
        month: d.toLocaleString("default", { month: "long", year: "numeric" }),
        sales: 0
      });

    })
    return days
  },[])


  const chartSalesData = last7DaysSales.map((day) => {
  const found = sales.find((s) => s.date === day.fullDate);
  return {
    ...day,
    sales: found ? found.sales : 0,
  };
});

  const chartData = last7Days.map((day) => {
  const found = purchases.find((p) => p.date === day.fullDate);
  return {
    ...day,
    purchases: found ? found.purchases : 0,
  };
});

const monthYears = [...new Set(last7Days.map((d) => d.month))].join(" / ");
const monthYearsSales = [...new Set(last7DaysSales.map((d) => d.month))].join(" / ");

  //   // Revenue vs cost data
  const revenueData = [
    {
      name: "Total",
      sales: totalSales.totalSales || 0,
      purchases: totalPurchases.totalPurchases || 0,
      revenue: revenue || 0,
    },
  ];


  const colors = [
  "#4CAF50", // Monday = green
  "#FF9800", // Tuesday = orange
  "#2196F3", // Wednesday = blue
  "#9C27B0", // Thursday = purple
  "#F44336", // Friday = red
  "#00BCD4", // Saturday = cyan
  "#FFC107", // Sunday = amber
];


  return (
    <>


      <div className="p-6 space-y-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold">Total Goods Sold</h2>
            <p className="text-2xl">${totalSales.totalQuantity || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold">Total Goods Purchased</h2>
            <p className="text-2xl">${totalPurchases.totalQuantity || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold">Revenue</h2>
            <p className="text-2xl">${revenue || 0}</p>
          </div>
        </div>


       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Sales Chart */}
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-bold mb-4">Sales Over Time</h3>
    <h2> {monthYearsSales}</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartSalesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      <Bar dataKey="sales" barSize={35}>


        {chartSalesData.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Purchases Chart */}
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-bold mb-2 text-center">{monthYears}</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="purchases" barSize={35}>
          {chartData.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
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