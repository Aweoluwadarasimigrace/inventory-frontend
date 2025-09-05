import useDashboardStore from '@/store/getDashboardStats'
import React, { useEffect } from 'react'

const TopSellingProduct = () => {

    const {fetchTopsellingProduct, topSellingProduct} = useDashboardStore()

    useEffect(() => {
  fetchTopsellingProduct()
    }, [fetchTopsellingProduct])
    
  return (
   <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg p-6 border border-gray-200 mt-8">
  {/* Section Header */}
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-xl font-bold text-gray-700">
      🏆 Top Selling Products
    </h2>
    <span className="text-sm text-gray-500">This Month</span>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {topSellingProduct.map((p) => (
      <div
        key={p._id}
        className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
      >
        <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
        <p className="text-sm text-gray-500">SKU: {p._id}</p>
        <p className="mt-2 text-blue-600 font-bold">{p.totalQuantity} sold</p>
        <p className="text-green-600 font-semibold">
          ₦{p.totalEarned.toLocaleString()}
        </p>
      </div>
    ))}
  </div>

  {/* View All Button */}
  <div className="mt-6 flex justify-end">
    <Link to={"/dashboard/product"}></Link>
  </div>
</div>

  )
}

export default TopSellingProduct