import useDashboardStore from '@/store/getDashboardStats';
import React, { useEffect } from 'react'

const DisplayOutofStockProduct = () => {
  const { outOfStockProducts, fetchOutOfStockProduct } = useDashboardStore();

  useEffect(() => {
    fetchOutOfStockProduct();
  }, [fetchOutOfStockProduct]);

  return (
   <div>
  {outOfStockProducts.length > 0 && (
    <div>
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-red-600">
        🚨 Out of Stock Products
      </h2>

      {/* Grid of products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outOfStockProducts.map((p) => (
          <div
            key={p._id}
            className="p-4 rounded-xl bg-red-50 flex flex-col border border-red-200"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">SKU: {p.sku}</span>
              <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">
                Out of Stock
              </span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
            <p className="text-red-600 font-bold mt-2">
              Quantity: {p.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  )}
</div>


  )
}

export default DisplayOutofStockProduct