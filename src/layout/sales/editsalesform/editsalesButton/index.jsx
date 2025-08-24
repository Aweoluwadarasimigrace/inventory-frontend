import React from 'react'
import { Link } from 'react-router'

const EditSalesButton = ({salesId}) => {
  return (
    <div>
        <Link to={`/dashboard/editsales/${salesId}`} className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
            Edit Sale
        </Link>
    </div>
  )
}

export default EditSalesButton