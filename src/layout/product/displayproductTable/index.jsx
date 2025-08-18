import useProductStore from '@/store/getproduct'
import React, { useEffect, useState } from 'react'

const DisplayProductTable = () => {
    const { products, loading, error, fetchAllProduct , totalProducts } = useProductStore();
    const [page, setpage] = useState(1);

    useEffect(() => {
        fetchAllProduct(page);
    }, [page]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {products.length === 0 && <p>No products available.</p>}
            {totalProducts > 0 && (
                <p>Total Products: {totalProducts}</p>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>SKU</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.name} /></td>
                            <td>{product.quantity}</td>
                            <td>{product.sku}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setpage(prev => Math.max(prev - 1, 1))}>Previous</button>
            <button onClick={() => setpage(prev => prev + 1)}>Next</button>
        </div>
    )
}

export default DisplayProductTable