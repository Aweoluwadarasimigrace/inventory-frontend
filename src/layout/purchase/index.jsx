import Loader from '@/sharedComponent/loader';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import CreatePurchaseButton from './createPurchaseform/create purchase button';
import DisplayPurchase from './displaypurchase';

const PurchaseLayout = () => {

  const { purchases, fetchPurchases, loading } = usePurchaseStore();
  const [page, setpage] = useState(1);

  useEffect(() => {
    fetchPurchases(page);


  }, [page])

  if(loading){
    return(
      <Loader />
    )
  }

  if(purchases.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg shadow-sm h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Start Managing Your Purchase Activities!
        </h1>
        <p className="text-gray-600 mb-1">
          Create, customize, and manage your purchases effectively.
        </p>
        <p className="text-gray-600 mb-4">
          Click the button below to add your first purchase.
        </p>
        <Link to={"/dashboard/createpurchase"}>
          <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition">
            Add Purchase
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
                        <h1 className="text-2xl font-bold text-[#676e8a]">Purchase Management</h1>
                        <p className="text-gray-600">Manage Your Purchases</p>
                        <p className="text-gray-500 text-sm">
                            A dashboard provides you an overview of purchase list with access to the most important data,
                            functions and controls.
                        </p>
                    </div>

                    <div className="flex gap-x-2">
                        <CreatePurchaseButton />
                        {/* <SalesPdfButton /> */}
                    </div>
                </div>


                {/* USER TABLE BELOW */}
                <div className="max-w-9xl mx-auto p-2 md:p-4">
                     <DisplayPurchase page={page} setpage={setpage} />
                </div>
            </div>
    </div>
  )
}

export default PurchaseLayout