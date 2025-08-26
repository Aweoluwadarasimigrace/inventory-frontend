import React from 'react'
import { useCreatePurchase } from '../hooks/useCreatePurchase';

const CreatePurchaseForm = () => {
  const { changeFormDetails, errors, submitForm, loading, formData } = useCreatePurchase();
  return (
    <div>

       <form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={submitForm}>
      
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Create New purchase</h2>
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. SKU */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">SKU</label>
                  <input
                    type="text"
                    placeholder="Enter SKU"
                    name='sku'
                    value={formData.sku || ""}
                    onChange={changeFormDetails}
                    className="flex-1 border border-slate-300 rounded-md px-4 py-2"
                  />
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>
      
                {/* 2. Name of product */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name of product</label>
                  <input
                    type="text"
                    name='productName'
                    value={formData.productName || ""}
                    placeholder="Enter product name"
                    onChange={changeFormDetails}
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>
      
                {/* 3. Quantity */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    name='quantity'
                    onChange={changeFormDetails}
                    placeholder="Enter product quantity"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>
      
                {/* 4. supplier */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Supplier</label>
                  <input
                    type="text"
                    name='supplier'
                    onChange={changeFormDetails}
                    value={formData.supplier || ""}
                    placeholder="Enter supplier name"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>
      
      
                {/* 5. Purchase Price  */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price</label>
                  <input
                    type="number"
                    name='purchasePrice'
                    onChange={changeFormDetails}
                    placeholder="Enter purchasePrice"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>
      
      
                {/* 6. date */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                  <div className="relative w-full">
                    <input
                      type="date"
                      name="date"
                      value={formData.date || ""}
                      onChange={changeFormDetails}
                      className="w-full border border-slate-300 rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    {/* Calendar icon */}
                  </div>
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>
      
      
                {/* Delivery Status */}
      
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Status</label>
                  <select name='received' onChange={changeFormDetails} value={formData.received} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select status</option>
                    <option value="false">not delivered</option>
                     <option value="true">delivered</option>
                  </select>
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>

                {/* Payment Status */}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Payment Status</label>
                  <select name='paymentStatus' onChange={changeFormDetails} value={formData.paymentStatus} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                  </select>
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>

                {/* Payment Method */}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Payment Method</label>
                  <select name='paymentMethod' onChange={changeFormDetails} value={formData.paymentMethod} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select method</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                  {errors.message && <small className="text-red-500">{errors.message}</small>}
                </div>

              </div>
              {/* Submit button */}
              <div className="pt-4 flex gap-2 justify-end">
                <button
                  type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
                  {loading ? "loading" : "Create Purchase"}
                </button>
      
              </div>
            </form>
      
      
      
    </div>
  )
}

export default CreatePurchaseForm