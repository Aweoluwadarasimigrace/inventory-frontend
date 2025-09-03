import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect } from 'react'

const DisplayOutofStockProduct = () => {
    const { outOfStockProducts, fetchOutOfStockProduct, count } = useDashboardStore();

    useEffect(() => {
      fetchOutOfStockProduct();
    }, [fetchOutOfStockProduct]);

  return (
    <div>

        <div className="bg-white p-6 rounded-xl shadow">
  <h2 className="text-xl font-bold mb-6 text-center text-red-600">
    ❌ Out of Stock Products ({count})
  </h2>

  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {outOfStockProducts.map((p) => (
        <div
          key={p._id}
          className="p-4 border rounded-xl bg-red-50 shadow-sm flex flex-col"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">SKU: {p.sku}</span>
            <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
          <h3 className="font-semibold text-lg">{p.name}</h3>
          <p className="text-red-600 font-bold mt-2">Quantity: {p.quantity}</p>
        </div>
      ))}
    </div>
</div>

    </div>
  )
}

export default DisplayOutofStockProduct