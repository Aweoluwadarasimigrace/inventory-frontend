import useDashboardStore from '@/store/getDashboardStats'
import React, { useEffect } from 'react'

const TopSellingProduct = () => {

    const {fetchTopsellingProduct, topSellingProduct} = useDashboardStore()

    useEffect(() => {
  fetchTopsellingProduct()
    }, [fetchTopsellingProduct])
    
  return (
    <div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {topSellingProduct.map((p) => (
    <div key={p._id} className="bg-white shadow rounded-xl p-4 flex flex-col items-center text-center">
      <h3 className="text-lg font-semibold">{p.name}</h3>
      <p className="text-sm text-gray-500">SKU: {p._id}</p>
      <p className="mt-2 text-blue-600 font-bold">{p.totalQuantity} sold</p>
      <p className="text-green-600">₦{p.totalEarned.toLocaleString()}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default TopSellingProduct