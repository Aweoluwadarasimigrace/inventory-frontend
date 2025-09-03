import Loader from '@/sharedComponent/loader';
import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect, useMemo } from 'react'
import { useOutletContext } from 'react-router';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Package, ShoppingCart, DollarSign } from "lucide-react";
import DisplayTotalProductAvailable from './gettotalproductavaailble';

const Dashboard = () => {
  const { fetchDashboardStats, salesData, loading, purchaseData, totalSales, totalPurchases, totalquantitysold, totalquantityPurchased } = useDashboardStore();
  const { user } = useOutletContext()
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
  }, [])



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
  }, [])


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



  const months = useMemo(() => {
    const year = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(year, currentMonth + i);
      return {
        id: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
        name: date.toLocaleString("default", { month: "short" })
      };
    });
  }, []);
  const map = {}

  totalSales.forEach((s) => {
    if (!map[s._id]) {
      map[s._id] = {
        sales: s.totalRevenue,
        purchases: 0
      };
    }
  });

  totalPurchases.forEach((p) => {
    if (map[p._id]) {
      map[p._id].purchases = p.totalCost;
    } else {
      map[p._id] = {
        sales: 0,
        purchases: p.totalCost
      };
    }
  });



  // 4. Build revenueData including months with 0 values
  const revenueData = months.map((m) => {
    const item = map[m.id] || { sales: 0, purchases: 0 };
    return {
      month: m.name,
      sales: item.sales,
      purchases: item.purchases,
      revenue: item.sales - item.purchases
    };
  });


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
      <div className="p-3 space-y-10">
        <div className="space-y-6">
          {/* Top Welcome Box with Details */}

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

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


            {/* Total Goods Sold */}
            <div className="bg-pink-500 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
              <Package size={40} className="text-white mb-3" />
              <h2 className="text-lg font-bold text-white">Total Goods Sold</h2>
              <p className="text-3xl font-extrabold text-white mt-2">
                {totalquantitysold?.totalQuantity || 0}
              </p>
            </div>

            {/* Total Goods Purchased */}
            <div className="bg-purple-500 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
              <ShoppingCart size={40} className="text-white mb-3" />
              <h2 className="text-lg font-bold text-white">Total Goods Purchased</h2>
              <p className="text-3xl font-extrabold text-white mt-2">
                {totalquantityPurchased?.totalQuantity || 0}
              </p>
            </div>
          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-2xl shadow-md border border-gray-200">
  {/* Header */}
  <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 tracking-wide">
    {monthYearsSales} – Sales Overview
  </h3>

  {/* Chart */}
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={chartSalesData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey="day" stroke="#6b7280" />
      <YAxis stroke="#6b7280" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      />
      <Bar dataKey="sales" barSize={35} radius={[6, 6, 0, 0]}>
        {chartSalesData.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>

          {/* Purchases Chart */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold mb-2 text-center">
              {monthYears}
            </h3>
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


        <div className="w-full p-4">
          {/* Header */}
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            Sales & Purchases Overview
          </h2>

          {/* Chart container */}
          <div
            className="bg-white shadow-md rounded-xl p-4"
            style={{ width: "100%", height: 400 }}
          >
            <ResponsiveContainer>
              <BarChart
                data={revenueData}
                margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* Bars with smaller width */}
                <Bar dataKey="sales" fill="#8884d8" barSize={25} />
                <Bar dataKey="purchases" fill="#82ca9d" barSize={25} />
                <Bar dataKey="revenue" fill="#ffc658" barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>


        <DisplayTotalProductAvailable />
      </div>

    </>

  )
}

export default Dashboard