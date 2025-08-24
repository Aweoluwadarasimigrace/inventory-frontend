import useSalesReturnStore from '@/store/getsalesreturn'
import React from 'react'
import DeleteAndEditDropdown from '../deleteandeditdropdown'

const DisplaySalesReturn = ({ page, setpage }) => {

  const { totalSalesReturns, totalPages, salesReturn } = useSalesReturnStore()
  return (
    <div>
      <h2 className='text-lg font-semibold text-gray-800'>Total Sales: {totalSalesReturns}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {salesReturn.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition relative"
          >
            {/* Dropdown top-right */}
            <div className="absolute top-3 right-3">
              <DeleteAndEditDropdown salesReturnId={item._id} />
            </div>

            {/* Invoice + SKU row */}

            <div className="mb-3">
              <span className="text-gray-500 text-sm">Invoice No:</span>
              <p className="font-medium text-gray-900">{item.invoiceNo}</p>
            </div>
            <div className="flex justify-between mb-3">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Product Name:</span>
                <p className="font-semibold text-gray-900">{item.productName}</p>
              </div>


              <div className="flex flex-col text-right">
                <span className="text-gray-500 text-sm">SKU</span>
                <p className="font-medium text-gray-900">{item.sku}</p>
              </div>
            </div>

            {/* Product name + Customer */}

            <div className="mb-3">
              <span className="text-gray-500 text-sm">Customer</span>
              <p className="font-medium text-gray-900">{item.customerName}</p>
            </div>

            {/* Price + Quantity */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <span className="text-gray-500 text-sm">Sales Price</span>
                <p className="font-medium text-gray-900">₦{item.salesPrice}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Quantity Returned</span>
                <p className="font-medium text-gray-900">{item.quantityReturned}</p>
              </div>
            </div>

            {/* Return Date + Processed */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <span className="text-gray-500 text-sm">Return Date</span>
                <p className="font-medium text-gray-900">{item.returnDate}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Processed</span>
                <p
                  className={`font-medium ${item.processed ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {item.processed ? "Yes" : "No"}
                </p>
              </div>
            </div>

            {/* Reason */}
            <div className="mb-3">
              <span className="text-gray-500 text-sm">Reason</span>
              <p className="font-medium text-gray-900">{item.reason}</p>
            </div>

            {/* Total Return */}
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <span className="text-gray-500 text-sm block">Total Return Amount</span>
              <span className="text-lg font-bold text-red-600">
                ₦{item.totalReturnAmount}
              </span>
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

export default DisplaySalesReturn