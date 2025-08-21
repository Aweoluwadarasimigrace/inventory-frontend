import React, { useEffect, useState } from 'react'
import DisplayProductTable from './displayproductTable'
import useProductStore from '@/store/getproduct'
import Loader from '@/sharedComponent/loader';
import CreateProductButton from './createproduct/createproductButton';
import ProductPdfButton from './pdfbutton';
import { Link } from 'react-router';

const ProductPage = () => {
  const { fetchAllProduct, products, loading } = useProductStore();
  const [page, setpage] = useState(1);


  useEffect(() => {
    fetchAllProduct(page)

  }, [page])

  if (loading) {
    return (
      <Loader />
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg shadow-sm h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Start Managing Your Product Activities!
        </h1>
        <p className="text-gray-600 mb-1">
          Create, customize, and manage your products effectively.
        </p>
        <p className="text-gray-600 mb-4">
          Click the button below to add your first product.
        </p>
       <Link to={"/dashboard/createproduct"}>
         <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition">
           Add Product
         </button>
       </Link>
      </div>
    )
  }



  return (
    <div>
      <div className="min-h-full bg-gray-100">
                {/* HEADER + BUTTON: Responsive Side by Side */}
                <div className="max-w-9xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#676e8a]">Product Management</h1>
                        <p className="text-gray-600">Manage Your Products</p>
                        <p className="text-gray-500 text-sm">
                            A dashboard provides you an overview of products list with access to the most important data,
                            functions and controls.
                        </p>
                    </div>

                    <div className="flex gap-x-2">
                        <CreateProductButton />
                        <ProductPdfButton/>
                    </div>
                </div>


                {/* USER TABLE BELOW */}
                <div className="max-w-9xl mx-auto p-2 md:p-4">
                     <DisplayProductTable page={page} setpage={setpage} />
                </div>
            </div>
    </div>
  )
}

export default ProductPage