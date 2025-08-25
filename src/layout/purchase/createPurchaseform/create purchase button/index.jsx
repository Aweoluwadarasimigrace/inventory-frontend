import React from 'react'
import { Link } from 'react-router'

const CreatePurchaseButton = () => {
  return (
    <div>
       <Link to={"/dashboard/createpurchase"} >
                <button className="bg-purple-600 px-4 py-2 rounded text-white">
                    create Purchase
                </button>
            </Link>
    </div>
  )
}

export default CreatePurchaseButton