import useSalesStore from '@/store/getsales'
import React from 'react'

const DisplaySales = ({ page, setpage }) => {
    const { sales, totalPages, totalsales } = useSalesStore()

    return (
        <div>
            <h2>Total Sales: {totalsales}</h2>
           <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-md">
  <thead className="bg-gray-100 text-gray-700">
    <tr>
      <th className="px-4 py-2 text-left text-sm font-semibold">SKU</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Product</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Quantity</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Customer</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Price</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Total</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
      <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200 text-sm">
    {sales.map((sale) => (
      <tr key={sale._id} className="hover:bg-gray-50">
        <td className="px-4 py-2">{sale.sku}</td>
        <td className="px-4 py-2 font-medium">{sale.productName}</td>
        <td className="px-4 py-2">{sale.quantity}</td>
        <td className="px-4 py-2">{sale.customer}</td>
        <td className="px-4 py-2">₦{sale.salesPrice}</td>
        <td className="px-4 py-2">₦{sale.totalCost}</td>
        <td className="px-4 py-2">{sale.date}</td>
        <td className="px-4 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              sale.fulfilled
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {sale.fulfilled ? "Fulfilled" : "Pending"}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>


            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                    Previous
                </button>

                <span className="text-sm font-medium">
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() => setpage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default DisplaySales