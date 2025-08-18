import Loader from '@/sharedComponent/loader';
import useProductStore from '@/store/getproduct'
import React, { useEffect, useState } from 'react'

const DisplayProductTable = () => {
    const { products, loading, error, fetchAllProduct, totalProducts } = useProductStore();
    const [page, setpage] = useState(1);

    useEffect(() => {
        fetchAllProduct(page);
    }, [page]);
    if (loading) {
        <Loader />
    }
    return (
        <div>
            {error && <p>Error: {error}</p>}
            {products.length === 0 && (
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
            )}

            {totalProducts > 0 && (
                <p>Total Products: {totalProducts}</p>
            )}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Category</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Image</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Quantity</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">SKU</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-t">
                                <td className="px-4 py-2">{product.name}</td>
                                <td className="px-4 py-2">{product.description}</td>
                                <td className="px-4 py-2">{product.category}</td>
                                <td className="px-4 py-2">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2">{product.quantity}</td>
                                <td className="px-4 py-2">{product.sku}</td>
                                <td className="px-4 py-2 font-medium text-green-600">
                                    ₦{product.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-4 mt-4">
                <button
                    onClick={() => setpage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                    disabled={page === 1}
                >
                    Previous
                </button>

                <span className="text-sm font-medium">
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() => setpage((prev) => prev + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default DisplayProductTable