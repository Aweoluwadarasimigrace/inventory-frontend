import useSalesStore from '@/store/getsales'
import React from 'react'
import DeleteAndEditDropdown from '../deleteandeditdropdown'

const DisplaySales = ({ page, setpage }) => {
    const { sales, totalPages, totalsales } = useSalesStore()

    return (
        <div>
            <h2 className='text-lg font-semibold text-gray-800'>Total Sales: {totalsales}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {sales.map((sale) => (
                    <div
                        key={sale._id}
                        className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
                    >
                        <div className="flex justify-between items-center mb-2">
                              <h2 className="font-semibold text-gray-800">{sale.productName}</h2>
                            <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold ${sale.fulfilled
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {sale.fulfilled ? true : false}
                            </span>
                             <DeleteAndEditDropdown salesId = {sale._id}/> 
                        </div>

                        <p className="text-sm text-gray-500 mb-1">SKU: {sale.sku}</p>
                        <p className="text-sm text-gray-500 mb-1">Customer: {sale.customer}</p>

                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <p className="text-xs text-gray-500">Quantity</p>
                                <p className="font-medium">{sale.quantity}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <p className="text-xs text-gray-500">Price</p>
                                <p className="font-medium">₦{sale.salesPrice}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 text-center col-span-2">
                                <p className="text-xs text-gray-500">Total</p>
                                <p className="font-semibold text-gray-800">₦{sale.totalCost}</p>
                            </div>
                        </div>

                        <div className="mt-3 text-xs text-gray-400">
                            Date: {sale.date}
                        </div>
                    </div>
                ))}
            </div>


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