import useDashboardStore from '@/store/getDashboardStats'
import React from 'react'

const SalesPerMonth = () => {

    const {fetchtotalSalesPerMonth, totalSales, totalSalesQuantity } = useDashboardStore()

    useEffect(() => {
     fetchtotalSalesPerMonth()
    }, [fetchtotalSalesPerMonth])
    
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Total Sales */}
  <div className="bg-white rounded-xl shadow p-6 text-center flex-1">
    <h2 className="text-lg font-semibold text-gray-600">💰 Total Sales (This Month)</h2>
    <p className="text-4xl font-bold text-green-600 mt-3">
      ₦{totalSales?.toLocaleString() || 0}
    </p>
  </div>

  {/* Total Quantity Sold */}
  <div className="bg-white rounded-xl shadow p-6 text-center flex-1">
    <h2 className="text-lg font-semibold text-gray-600">📦 Total Quantity Sold</h2>
    <p className="text-4xl font-bold text-purple-600 mt-3">
      {totalSalesQuantity || 0}
    </p>
  </div>
</div>

    </div>
  )
}

export default SalesPerMonth