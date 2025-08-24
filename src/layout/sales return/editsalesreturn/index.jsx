import React, { use, useEffect } from 'react'
import { useParams } from 'react-router';
import { useEditSalesReturn } from '../hooks/useEditSalesReturn';
import useSalesReturnStore from '@/store/getsalesreturn';

const EditSalesReturn = () => {

  const salesReturnId = useParams().id;
  const { changeFormDetails, submitForm, setformData, isLoading, formData } = useEditSalesReturn();

  const {salesReturn} = useSalesReturnStore();
  

  useEffect(() => {
   if(!salesReturnId || !salesReturn.length) return;

   const salesReturnToEdit = salesReturn.find(item => item._id === salesReturnId);
   if(salesReturnToEdit) {
     setformData({
       quantityReturned: salesReturnToEdit.quantityReturned,
       invoiceNo: salesReturnToEdit.invoiceNo,
       customerName: salesReturnToEdit.customerName,
       productName: salesReturnToEdit.productName,
       sku: salesReturnToEdit.sku,
       salesPrice: salesReturnToEdit.salesPrice,
       returnDate: salesReturnToEdit.returnDate,
       processed: salesReturnToEdit.processed,
       reason: salesReturnToEdit.reason,
       // Include other fields from salesReturnToEdit as needed
     });
   }
  }, [salesReturn, salesReturnId])
  
  return (
    <div>

       <form className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={(e)=>submitForm(e, salesReturnId)}>

              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Update Sales Return</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* 1. Quantity */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Quantity returned</label>
                  <input
                    type="number"
                    name='quantityReturned'
                    disabled
                    value={formData.quantityReturned || ""}
                    onChange={changeFormDetails}
                    placeholder="Enter quantity returned"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>

                {/* 2. reason */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Return</label>
                  <textarea
                    name='reason'
                    value={formData.reason || ""}
                    onChange={changeFormDetails}
                    placeholder="Enter reason for return"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>


                                {/* 3. invoice number */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Invoice Number</label>
                  <input
                    type="text"
                    name='invoiceNo'
                    disabled
                    value={formData.invoiceNo || ""}
                    onChange={changeFormDetails}
                    placeholder="Enter invoice number"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>

    
                {/* 4. SKU */}
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
      
      
                {/* 5. product Name  */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name of the product Returned</label>
                  <input
                    type="text"
                    name='productName'
                    value={formData.productName || ""}
                    placeholder="Enter product name"
                    onChange={changeFormDetails}
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>
      

      
                {/* 6. Customer Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Customer Name</label>
                  <input
                    type="text"
                    name='customerName'
                    onChange={changeFormDetails}
                    value={formData.customerName || ""}
                      placeholder="Enter customer name"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>
      
      
                {/* 7. salesPrice  */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">sales Price</label>
                  <input
                    type="number"
                    name='salesPrice'
                    disabled
                    onChange={changeFormDetails}
                    value={formData.salesPrice || ""}
                    placeholder="Enter product salesPrice"
                    className="w-full border border-slate-300 rounded-md px-4 py-2"
                  />
                </div>
      
      
                {/* 8. date */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                  <div className="relative w-full">
                    <input
                      type="date"
                      name="returnDate"
                      disabled
                      value={formData.returnDate || ""}
                      onChange={changeFormDetails}
                      className="w-full border border-slate-300 rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    {/* Calendar icon */}
                  </div>
                </div>
      
      
                {/* Delivery Status */}
      
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Returned Status</label>
                  <select name='processed' onChange={changeFormDetails} value={formData.processed} className="w-full border border-slate-300 rounded-md px-4 py-2">
                    <option value="">Select status</option>
                    <option value="false">not returned Yet</option>
                     <option value="true">returned</option>
                  </select>
                </div>
      
              </div>
              {/* Submit button */}
              <div className="pt-4 flex gap-2 justify-end">
                <button
                  type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
                  {isLoading ? "loading" : "update Sales Return"}
                </button>
      
              </div>

              </form>
    </div>
  )
}

export default EditSalesReturn