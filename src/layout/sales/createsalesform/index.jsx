import React from 'react'
import { useCreateSales } from '../hooks/useCreateSales'
import { AiOutlineCalendar } from "react-icons/ai";
const CreateSalesForm = () => {
  const { changeFormDetails, errors, submitForm, loading , formData} = useCreateSales()
  return (
    <>
      <form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={submitForm}>

        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Create New User</h2>

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

          {/* 1. Quantity */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
            <input
              type="number"
              name='quantity'
              value={formData.quantity || ""}
              onChange={changeFormDetails}
              placeholder="Enter product quantity"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.message && <small className="text-red-500">{errors.message}</small>}
          </div>

          {/* 4. customerName */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">customerName</label>
            <input
              type="text"
              name='customer'
              onChange={changeFormDetails}
              value={formData.customer || ""}
              placeholder="Enter customer name"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.message && <small className="text-red-500">{errors.message}</small>}
          </div>


          {/* 5. salesPrice  */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">salesPrice</label>
            <input
              type="number"
              name='salesPrice'
              onChange={changeFormDetails}
              value={formData.salesPrice || ""}
              placeholder="Enter product salesPrice"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.message && <small className="text-red-500">{errors.message}</small>}
          </div>


          {/* 4. category */}
          <div>
            <div className="relative w-full">
              <input
                type="date"
                name="date"
                value={formData.date || ""}
                onChange={changeFormDetails}
                className="w-full border border-slate-300 rounded-md px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              {/* Calendar icon */}
              <AiOutlineCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
            {errors.message && <small className="text-red-500">{errors.message}</small>}
          </div>

          {/* quantity */}
         


          {/* sku */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Status</label>
            <select name='fulfilled' onChange={changeFormDetails} value={formData.fulfilled || ""} className="w-full border border-slate-300 rounded-md px-4 py-2">
              <option value="">Select status</option>
              <option value="true">delivered</option>
              <option value="false">not delivered</option>
            </select>
            {errors.message && <small className="text-red-500">{errors.message}</small>}
          </div>

        </div>
        {/* Submit button */}
        <div className="pt-4 flex gap-2 justify-end">
          <button
            type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
            {loading ? "loading" : "Create Product"}
          </button>

        </div>
      </form>

    </>
  )
}

export default CreateSalesForm