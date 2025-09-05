import useDashboardStore from '@/store/getDashboardStats'
import { Package, ShoppingCart } from 'lucide-react';
import React, { useEffect } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const DisplayTotalCustomer = () => {
  const { fetchDashboardStats, fetchTotalCustomerAvailable, customerCount, count, fetchOutOfStockProduct, fetchTotalProduct, productCount, totalquantitysold, totalquantityPurchased, fetchtotalSalesPerMonth, totalsales, totalSalesQuantity } = useDashboardStore();

  useEffect(() => {
    fetchTotalCustomerAvailable()
    fetchOutOfStockProduct()
    fetchTotalProduct()
    fetchDashboardStats()
    fetchtotalSalesPerMonth()
  }, [fetchOutOfStockProduct, fetchTotalCustomerAvailable, fetchTotalProduct, fetchDashboardStats, fetchtotalSalesPerMonth])
  const fakeData = [
    { step: "Start", value: 0 },
    { step: "Progress", value: totalsales ? totalsales / 2 : 0 },
    { step: "Now", value: totalsales || 0 },
  ];

  return (
    <div className="flex gap-6">

      {/* <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl shadow-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-700">
        💰 Total Sales (This Month)
      </h2>

      <p className="text-4xl font-extrabold text-green-600 mt-3">
        ₦{totalsales?.toLocaleString() || 0}
      </p>

      
      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={fakeData}>
            <XAxis dataKey="step" hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div> */}

    <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl shadow-lg p-6 border border-gray-200">
  <h2 className="text-lg font-semibold text-gray-700">
    💰 Total Sales (This Month)
  </h2>

  <p className="text-4xl font-extrabold text-green-600 mt-3">
    ₦{totalsales?.toLocaleString() || 0}
  </p>

  {/* Zig-zag line with arrow */}
  <div className="mt-4 h-32">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={fakeData}>
        <XAxis dataKey="step" hide />
        <Tooltip />

        {/* Zig-zag line */}
        <Line
          type="linear" // keeps the zig-zag instead of smoothing
          dataKey="value"
          stroke="#22c55e"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
        />

        {/* Arrow marker at the end */}
        <Line
          type="linear"
          dataKey="value"
          stroke="transparent" // hide second line
          dot={({ cx, cy, index }) => {
            if (index === fakeData.length - 1) {
              return (
                <text
                  x={cx + 5}
                  y={cy}
                  fontSize={20}
                  fill="#22c55e"
                  fontWeight="bold"
                >
                  ↑
                </text>
              );
            }
            return null;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

      {/* Other Boxes in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Customers */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              👥 Total Customers
            </h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {customerCount}
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <span className="text-purple-600 text-2xl">👥</span>
          </div>
        </div>

        {/* Total Goods Sold */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              📦 Total Goods Sold
            </h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totalquantitysold?.totalQuantity || 0}
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <Package size={28} className="text-green-600" />
          </div>
        </div>

        {/* Total Goods Purchased */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              🛒 Total Goods Purchased
            </h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totalquantityPurchased?.totalQuantity || 0}
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <ShoppingCart size={28} className="text-blue-600" />
          </div>
        </div>

        {/* Out of Stock */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              ⚠️ Out of Stock
            </h2>
            <p className="text-3xl font-bold text-red-600 mt-2">{count}</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <span className="text-red-600 text-2xl">⚠️</span>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              📦 Total Products
            </h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{productCount}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <span className="text-blue-600 text-2xl">📦</span>
          </div>
        </div>

        {/* Total Quantity Sold */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              📊 Total Quantity Sold
            </h2>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {totalSalesQuantity || 0}
            </p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <span className="text-purple-600 text-2xl">📊</span>
          </div>
        </div>
      </div>

    </div>


  )
}

export default DisplayTotalCustomer