import Loader from '@/sharedComponent/loader';
import useProductStore from '@/store/getproduct'
import React, { useEffect, useState } from 'react'

const DisplayProductTable = () => {
    const { products, loading, error, fetchAllProduct, totalProducts, totalPages } = useProductStore();
    const [page, setpage] = useState(1);

    useEffect(() => {
        fetchAllProduct(page);
    }, [page]);
    if (loading) {
        <Loader />
    }
    if (products.length === 0) {
        <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Start Managing Your Product Activities!
            </h1>
            <p className="text-gray-600 mb-1">
                Create, customize, and manage your products effectively.
            </p>
            <p className="text-gray-600 mb-4">
                Click the button below to add your first product.
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition">
                Add Product
            </button>
        </div>
    }
    return (
        <div>
            {error && <p>Error: {error}</p>}
            {totalProducts > 0 && (
                <p>Total Products: {totalProducts}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition flex flex-col"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            {product.name}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {product.description}
                        </p>
                        <p className="text-sm text-gray-500 mb-1">
                            Category: <span className="font-medium">{product.category}</span>
                        </p>
                        <p className="text-sm text-gray-500 mb-1">Quantity: {product.quantity}</p>
                        <p className="text-sm text-gray-500 mb-1">SKU: {product.sku}</p>
                        <p className="text-base font-bold text-blue-600 mt-2">${product.price}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                    Previous
                </button>
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

export default DisplayProductTable