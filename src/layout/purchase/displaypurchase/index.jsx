import usePurchaseStore from '@/store/getPurchase'
import React from 'react'

const DisplayPurchase = ({ page, setpage }) => {
  const {purchases, totalPages, totalpurchases} = usePurchaseStore()


  return (
   <div className="p-6">
  {/* Header */}
  <h2 className="text-xl font-bold text-gray-900 mb-6">
    Total {totalpurchases} Purchases
  </h2>

  {/* Purchases Grid */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {purchases?.map((purchase) => (
      <div
        key={purchase._id}
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition"
      >
        <div className="space-y-3">
          {/* Product Name */}
          <div>
            <p className="text-xs uppercase text-gray-400">Product</p>
            <p className="font-semibold text-gray-800">{purchase.productName}</p>
          </div>

          {/* SKU & Invoice */}
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-xs text-gray-400">SKU</p>
              <p className="font-medium">{purchase.sku}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Invoice</p>
              <p className="font-medium">{purchase.invoiceNo}</p>
            </div>
          </div>

          {/* Quantity & Supplier */}
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-xs text-gray-400">Quantity</p>
              <p className="font-medium">{purchase.quantity}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Supplier</p>
              <p className="font-medium">{purchase.supplier}</p>
            </div>
          </div>

          {/* Prices */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-400">Purchase Price</p>
              <p className="font-medium">₦{purchase.purchasePrice}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Cost</p>
              <p className="font-semibold text-green-600">₦{purchase.totalcost}</p>
            </div>
          </div>

          {/* Payment */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-400">Payment</p>
              <p
                className={`font-semibold ${
                  purchase.paymentStatus === "Paid"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {purchase.paymentStatus}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Method</p>
              <p className="font-medium">{purchase.paymentMethod}</p>
            </div>
          </div>

          {/* Date & Received */}
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-xs text-gray-400">Date</p>
              <p className="font-medium">{purchase.date}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Received</p>
              <p className="font-medium">
                {purchase.received ? (
                  <span className="text-green-600">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex justify-center items-center gap-3 mt-8">
    <button
      onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
      className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
    >
      Previous
    </button>

    <span className="text-sm font-medium text-gray-700">
      Page {page} of {totalPages}
    </span>

    <button
      onClick={() => setpage((prev) => prev + 1)}
      className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
    >
      Next
    </button>
  </div>
</div>

  )
}

export default DisplayPurchase