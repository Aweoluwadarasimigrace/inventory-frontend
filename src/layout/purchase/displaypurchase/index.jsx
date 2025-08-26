import usePurchaseStore from '@/store/getPurchase'
import React from 'react'

const DisplayPurchase = ({ page, setpage }) => {
  const {purchases, totalPages, totalpurchases} = usePurchaseStore()


  return (
    <div>
      <h2 className='text-lg font-semibold text-gray-800'>total {totalpurchases} of purchases</h2>

<div>
  {
  purchases?.map((purchase) => (
<div key={purchase._id} className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <p className="text-sm text-gray-500">SKU</p>
          <p className="font-medium">{purchase.sku}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Invoice No</p>
          <p className="font-medium">{purchase.invoiceNo}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Product Name</p>
          <p className="font-medium">{purchase.productName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Quantity</p>
          <p className="font-medium">{purchase.quantity}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Supplier</p>
          <p className="font-medium">{purchase.supplier}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Purchase Price</p>
          <p className="font-medium">₦{purchase.purchasePrice}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Total Cost</p>
          <p className="font-medium text-green-600">₦{purchase.totalcost}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">{purchase.date}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Received</p>
          <p className="font-medium">{purchase.received ? "Yes" : "No"}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Payment Status</p>
          <p
            className={`font-medium ${
              purchase.paymentStatus === "Paid"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {purchase.paymentStatus}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Payment Method</p>
          <p className="font-medium">{purchase.paymentMethod}</p>
        </div>
</div>
  ))

}</div>

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

export default DisplayPurchase