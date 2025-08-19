import React from 'react'
import { Link } from 'react-router'

const EditProductButton = ({productId}) => {
  return (
    <div>
        <Link to={`/dashboard/editproduct/${productId}`} className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
            Edit Product
        </Link>
    </div>
  )
}

export default EditProductButton