import React from 'react'
import { useCreateProduct } from '../hooks/useCreateProduct';

const CreateProductForm = () => {
    const { changeFormDetails, submitForm, isLoading, handleFileChange, formData, errors } = useCreateProduct();
    return (
        <div>
            <div>
                <form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={submitForm}>

                    <h2 className="text-2xl font-semibold text-slate-800 mb-6">Create New User</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* 1. Name of product */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Name of product</label>
                            <input
                                type="text"
                                name='name'
                                value={formData.name || ""}
                                placeholder="Enter product name"
                                onChange={changeFormDetails}
                                className="w-full border border-slate-300 rounded-md px-4 py-2"
                            />
                            {errors.name && <small className="text-red-500">{errors.name}</small>}
                        </div>

                        {/* 2. Description */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <input
                                type="text"
                                name='description'
                                onChange={changeFormDetails}
                                value={formData.description || ""}
                                placeholder="Enter product description"
                                className="w-full border border-slate-300 rounded-md px-4 py-2"
                            />
                            {errors.description && <small className="text-red-500">{errors.description}</small>}
                        </div>

                        {/* 3. Price  */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
                            <input
                                type="number"
                                name='price'
                                onChange={changeFormDetails}
                                value={formData.price || ""}
                                placeholder="Enter product price"
                                className="w-full border border-slate-300 rounded-md px-4 py-2"
                            />
                            {errors.price && <small className="text-red-500">{errors.price}</small>}
                        </div>


                        {/* 4. category */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                            <input
                                type="text"
                                name='category'
                                value={formData.category || ""}
                                onChange={changeFormDetails}
                                placeholder="Enter product category"
                                className="w-full border border-slate-300 rounded-md px-4 py-2"
                            />
                            {errors.category && <small className="text-red-500">{errors.category}</small>}
                        </div>

                        {/* quantity */}
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
                            {errors.quantity && <small className="text-red-500">{errors.quantity}</small>}
                        </div>


                        {/* sku */}
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
                            {errors.sku && <small className="text-red-500">{errors.sku}</small>}
                        </div>



                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="flex-1 border border-slate-300 rounded-md px-4 py-2"
                            />
                        </div>
                    </div>
                    {/* Submit button */}
                    <div className="pt-4 flex gap-2 justify-end">
                        <button
                            type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
                            {isLoading ? "loading" : "Create Product"}
                        </button>

                    </div>
                </form>


            </div>
        </div>
    )
}

export default CreateProductForm