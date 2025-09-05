import useDashboardStore from '@/store/getDashboardStats'
import { Package, ShoppingCart } from 'lucide-react';
import React, { useEffect } from 'react'

const DisplayTotalCustomer = () => {
  const { fetchDashboardStats, fetchTotalCustomerAvailable, customerCount, count, fetchOutOfStockProduct, fetchTotalProduct, productCount, totalquantitysold, totalquantityPurchased, fetchtotalSalesPerMonth, totalsales, totalSalesQuantity } = useDashboardStore();

  useEffect(() => {
    fetchTotalCustomerAvailable()
    fetchOutOfStockProduct()
    fetchTotalProduct()
    fetchDashboardStats()
    fetchtotalSalesPerMonth()
  }, [fetchOutOfStockProduct, fetchTotalCustomerAvailable, fetchTotalProduct, fetchDashboardStats, fetchtotalSalesPerMonth])

  return (
   <div className="flex flex-col gap-6">
  {/* First Box */}
  <div className="bg-white rounded-xl shadow p-6 text-center flex-1">
    <h2 className="text-lg font-semibold text-gray-600">
      💰 Total Sales (This Month)
    </h2>
    <p className="text-4xl font-bold text-green-600 mt-3">
      ₦{totalsales?.toLocaleString() || 0}
    </p>
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
    <div className="bg-white rounded-xl shadow p-6 text-center flex-1">
      <h2 className="text-lg font-semibold text-gray-600">
        📦 Total Quantity Sold
      </h2>
      <p className="text-4xl font-bold text-purple-600 mt-3">
        {totalSalesQuantity || 0}
      </p>
    </div>
  </div>
</div>


  )
}

export default DisplayTotalCustomer