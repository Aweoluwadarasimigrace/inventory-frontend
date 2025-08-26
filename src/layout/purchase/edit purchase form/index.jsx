import React, { useEffect } from 'react'
import { useEditPurchase } from '../hooks/useEditPurchase';
import { useParams } from 'react-router';
import usePurchaseStore from '@/store/getPurchase';

const EditPurchaseForm = () => {
  const purchaseId = useParams().id;
  const {purchases} = usePurchaseStore();

  const {formData, isLoading, changeFormDetails, setFormData, submitForm} = useEditPurchase();

  useEffect(() => {

    if(!purchaseId || !purchases.length) return;

    const purchasetoUpdate = purchases.find((p) => p.id === purchaseId);
    if (purchasetoUpdate) {
      setFormData({
        sku: purchasetoUpdate.sku,
        productName: purchasetoUpdate.productName,
        quantity: purchasetoUpdate.quantity,
        supplier: purchasetoUpdate.supplier,
        purchasePrice: purchasetoUpdate.purchasePrice,
        date: purchasetoUpdate.date,
        received: purchasetoUpdate.received,
        paymentStatus: purchasetoUpdate.paymentStatus,
        paymentMethod: purchasetoUpdate.paymentMethod,
      });
    }

    
  }, [purchaseId, purchases])

  return (
    <>
<form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={(e)=>(submitForm(e, purchaseId))}>

              <h2 className="text-2xl font-semibold text-slate-800 mb-6">update purchase</h2>
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. SKU */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">SKU</label>
                  <input
                    type="text"
                    placeholder="Enter SKU"
                    disabled
                    name='sku'
                    value={formData.sku || ""}
                    onChange={changeFormDetails}
                    className="flex-1 border border-slate-300 rounded-md px-4 py-2"
                  />
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
                </div>
      
                {/* 3. Quantity */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    name='quantity'
                    disabled
                    value={formData.quantity || ""}
                    onChange={changeFormDetails}
                    placeholder="Enter product quantity"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
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
                </div>
      
      
                {/* 5. Purchase Price  */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price</label>
                  <input
                    type="number"
                    disabled
                    name='purchasePrice'
                    value={formData.purchasePrice || ""}
                    onChange={changeFormDetails}
                    placeholder="Enter purchasePrice"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>
      
      
                {/* 6. date */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                  <div className="relative w-full">
                    <input
                      type="date"
                      name="date"
                      disabled
                      value={formData.date || ""}
                      onChange={changeFormDetails}
                      className="w-full border border-slate-300 rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    {/* Calendar icon */}
                  </div>
                </div>
      
      
                {/* Delivery Status */}
      
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Status</label>
                  <select name='received' onChange={changeFormDetails} value={formData.received} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="false">not delivered</option>
                     <option value="true">delivered</option>
                  </select>
                </div>

                {/* Payment Status */}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Payment Status</label>
                  <select name='paymentStatus' onChange={changeFormDetails} value={formData.paymentStatus} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                  </select>
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
                </div>

              </div>
              {/* Submit button */}
              <div className="pt-4 flex gap-2 justify-end">
                <button
                  type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
                  {isLoading ? "loading" : "update Purchase"}
                </button>
      
              </div>
            </form>
      

    </>
  )
}

export default EditPurchaseForm