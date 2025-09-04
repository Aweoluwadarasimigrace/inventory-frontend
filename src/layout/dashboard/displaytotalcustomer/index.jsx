import useDashboardStore from '@/store/getDashboardStats'
import React, { useEffect } from 'react'

const DisplayTotalCustomer = () => {
    const { fetchTotalCustomerAvailable, customerCount, count, fetchOutOfStockProduct } = useDashboardStore();

    useEffect(() => {
        fetchTotalCustomerAvailable()
        fetchOutOfStockProduct()

    }, [fetchOutOfStockProduct, fetchTotalCustomerAvailable])

    return (
      <div className="flex gap-6">
  <div className="bg-purple-300 rounded-xl shadow p-6 text-center flex-1">
    <h2 className="text-lg font-semibold text-gray-600">👥 Total Customers</h2>
    <p className="text-4xl font-bold text-blue-600 mt-3">
      {customerCount}
    </p>
  </div>

  <div className="bg-pink-200 rounded-xl shadow p-6 text-center flex-1">
    <h2 className="text-lg font-semibold text-gray-600">⚠️ Out of Stock Products</h2>
    <p className="text-4xl font-bold text-blue-600 mt-3">
      {count}
    </p>
  </div>
</div>

    )
}

export default DisplayTotalCustomer