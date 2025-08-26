import React from 'react'
import { Link } from 'react-router'

const EditPurchaseButton = ({ purchaseId }) => {
  return (
    <div>
        <Link to={`/dashboard/editpurchase/${purchaseId}`} className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
            Edit Purchase
        </Link>
    </div>
  )
}

export default EditPurchaseButton