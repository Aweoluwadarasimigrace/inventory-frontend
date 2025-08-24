import useSalesReturnStore from '@/store/getsalesreturn'
import React from 'react'
import DeleteAndEditDropdown from '../deleteandeditdropdown'

const DisplaySalesReturn = ({page, setpage}) => {

    const { totalSalesReturn, totalPages, salesReturn } = useSalesReturnStore()
  return (
    <div>
 <h2 className='text-lg font-semibold text-gray-800'>Total Sales: {totalSalesReturn}</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {salesReturn.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
          <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Invoice No</span>
          <span className="font-medium text-gray-900">{item.invoiceNo}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">SKU</span>
          <span className="font-medium text-gray-900">{item.sku}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Product Name</span>
          <span className="font-medium text-gray-900">{item.productName}</span>
          <DeleteAndEditDropdown salesReturnId={item._id} />
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Customer</span>
          <span className="font-medium text-gray-900">{item.customerName}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Sales Price</span>
          <span className="font-medium text-gray-900">₦{item.salesPrice}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Quantity Returned</span>
          <span className="font-medium text-gray-900">{item.quantityReturned}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Return Date</span>
          <span className="font-medium text-gray-900">{item.returnDate}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Processed</span>
          <span
            className={`font-medium ${
              item.processed ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.processed ? "Yes" : "No"}
          </span>
        </div>

        <div className="flex flex-col col-span-2">
          <span className="text-gray-500 text-sm">Reason</span>
          <span className="font-medium text-gray-900">{item.reason}</span>
        </div>

        <div className="flex flex-col col-span-2 bg-gray-50 p-3 rounded-lg mt-2">
          <span className="text-gray-500 text-sm">Total Return Amount</span>
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