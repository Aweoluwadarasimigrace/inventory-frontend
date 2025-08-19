import React, { useEffect } from 'react'
import { useEditProduct } from '../hooks/useEditProduct';
import useProductStore from '@/store/getproduct';
import { useParams } from 'react-router';

const EditProductForm = () => {
    const { formData, changeFormDetails, handleFileChange, submitForm, isLoading, setformData, setimage, image } = useEditProduct();
    const { products } = useProductStore();
    const productId = useParams().productId;
    useEffect(() => {
        console.log(productId, "from params")

        if (!productId || !products.length) return;

        const productToUpdate = products.find((product) => product._id === productId);
        if (productToUpdate) {
            setformData({
                name: productToUpdate.name || "",
                description: productToUpdate.description || "",
                price: productToUpdate.price || 0,
                category: productToUpdate.category || "",
                quantity: productToUpdate.quantity || 0,
                sku: productToUpdate.sku || "",
            });
            setimage({ image: productToUpdate.image || null });
        }

    }, [productId, products])


    return (
        <div>
            <div>
                <div>
                    <form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={(e) => submitForm(e, productId)}>

                        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Edit Product</h2>

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

                            </div>



                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Image</label>
                                <input
                                    type="file"
                                    name='image'
                                    value={image.image || ""}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            </div>
                        </div>
                        {/* Submit button */}
                        <div className="pt-4 flex gap-2 justify-end">
                            <button type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
                                {isLoading ? "loading" : "update Product"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProductForm