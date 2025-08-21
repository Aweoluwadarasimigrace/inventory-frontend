import useSalesStore from '@/store/getsales'
import React from 'react'

const DisplaySales = ({page, setpage}) => {
    const {sales, totalPages, totalSales} = useSalesStore()

  return (
    <div>
        <h2>Total Sales: {totalSales}</h2>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => (
                    <tr key={sale.id}>
                        <td>{sale.product}</td>
                        <td>{sale.quantity}</td>
                        <td>{sale.price}</td>
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