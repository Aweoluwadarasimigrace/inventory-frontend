import Loader from '@/sharedComponent/loader';
import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect, useMemo } from 'react'
import { useOutletContext } from 'react-router';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const { fetchDashboardStats, salesData, loading, purchaseData, totalSales, totalPurchases, revenue } = useDashboardStore();
const {user} = useOutletContext()
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
        <div className="space-y-6">
  {/* Top Welcome Box with Details */}
  <div className="bg-white p-6 rounded-md">
    <h1 className="text-2xl font-bold mb-2">
      Welcome back, <span className="text-purple-600">{user.companyName || user.firstName}</span> 👋
    </h1>
    <p className="text-gray-500 text-sm mb-4">
      Here’s an overview of your inventory performance
    </p>
    <p className="text-gray-600">
      Keep track of your daily sales and purchases to monitor business growth.  
      Analyze your revenue trends and make informed inventory decisions.  
    </p>
  </div>

  {/* Stat Boxes */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-pink-200 p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold text-white">Total Goods Sold</h2>
      <p className="text-2xl text-white">{totalSales.totalQuantity || 0}</p>
    </div>

    <div className="bg-purple-200 p-4 rounded-xl h-50">
      <h2 className="text-lg font-bold text-white">Total Goods Purchased</h2>
      <p className="text-2xl text-white">{totalPurchases.totalQuantity || 0}</p>
    </div>

    <div className="bg-green-200 p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold text-white">Revenue</h2>
      <p className="text-2xl text-white">${revenue || 0}</p>
    </div>
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