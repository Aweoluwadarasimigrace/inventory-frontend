import React, { useEffect } from 'react'
import { useEditSales } from '../hooks/useEditSales';
import useSalesStore from '@/store/getsales';
import { useParams } from 'react-router';

const EditSalesForm = () => {

  const salesId  = useParams().salesId;
  const { formData, changeFormDetails, submitForm, isLoading, setFormData } = useEditSales();
  const { sales } = useSalesStore();

  useEffect(() => {
    if (!salesId || !sales.length) return;

    const salesToUpdate = sales.find((sale) => sale._id === salesId);

    if (salesToUpdate) {
      setFormData({
        sku: salesToUpdate.sku,
        productName: salesToUpdate.productName,
        quantity: salesToUpdate.quantity,
        customer: salesToUpdate.customer,
        salesPrice: salesToUpdate.salesPrice,
        date: salesToUpdate.date,
        fulfilled: salesToUpdate.fulfilled
      })
    }


  }, [salesId, sales])

  return (
    <>

      <form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={(e) => submitForm(e, salesId)}>

        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Edit Sales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. Name of product */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">SKU</label>
            <input
              type="text"
              name='sku'
              value={formData.sku || ""}
              placeholder="Enter SKU"
              onChange={changeFormDetails}
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
          </div>

          {/* 2. Name of Product */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name of Product</label>
            <input
              type="text"
              name='productName'
              onChange={changeFormDetails}
              value={formData.productName || ""}
              placeholder="Enter product name"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
          </div>

          {/* 3. Quantity  */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
            <input
              type="number"
              name='quantity'
              onChange={changeFormDetails}
              value={formData.quantity || ""}
              placeholder="Enter product quantity"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />

          </div>

          {/* 4. Customer Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Customer Name</label>
            <input
              type="text"
              name='customer'
              value={formData.customer || ""}
              onChange={changeFormDetails}
              placeholder="Enter customer name"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Sales Price */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Sales Price</label>
            <input
              type="number"
              name='salesPrice'
              value={formData.salesPrice || ""}
              onChange={changeFormDetails}
              placeholder="Enter sales price"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
          </div>


          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date || ""}
              onChange={changeFormDetails}
              className="w-full border border-slate-300 rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Status</label>
            <select name='fulfilled' onChange={changeFormDetails} value={formData.fulfilled} className="w-full border border-slate-300 rounded-md px-4 py-2">
              <option value="">Select status</option>
              <option value="false">not delivered</option>
               <option value="true">delivered</option>
            </select>
          </div>

        
        </div>
        {/* Submit button */}
        <div className="pt-4 flex gap-2 justify-end">
          <button type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
            {isLoading ? "loading" : "update Product"}
          </button>

        </div>
      </form>
    </>
  )
}

export default EditSalesForm