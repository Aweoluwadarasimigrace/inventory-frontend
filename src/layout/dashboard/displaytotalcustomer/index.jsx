import useDashboardStore from '@/store/getDashboardStats'
import React, { useEffect } from 'react'

const DisplayTotalCustomer = () => {
  const { fetchTotalCustomerAvailable, customerCount, count, fetchOutOfStockProduct, fetchTotalProduct, productCount } = useDashboardStore();

  useEffect(() => {
    fetchTotalCustomerAvailable()
    fetchOutOfStockProduct()
    fetchTotalProduct()
  }, [fetchOutOfStockProduct, fetchTotalCustomerAvailable, fetchTotalProduct])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2' >
      {/* Total Customers */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">👥 Total Customers</h2>
          <p className="text-3xl font-bold text-gray-800 mt-2">{customerCount}</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <span className="text-purple-600 text-2xl">👥</span>
        </div>
      </div>

      {/* Out of Stock */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">⚠️ Out of Stock</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">{count}</p>
        </div>
        <div className="bg-red-100 p-3 rounded-full">
          <span className="text-red-600 text-2xl">⚠️</span>
        </div>
      </div>

      {/* Total Products */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">📦 Total Products</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{productCount}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">
          <span className="text-blue-600 text-2xl">📦</span>
        </div>
      </div>
    </div>


  )
}

export default DisplayTotalCustomer