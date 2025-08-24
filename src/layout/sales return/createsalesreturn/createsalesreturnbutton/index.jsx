import React from 'react'
import { Link } from 'react-router'

const CreateSalesReturnButton = () => {
  return (
    <>
     <Link to={"/dashboard/createsalesreturn"} >
                <button className="bg-purple-600 px-4 py-2 rounded text-white">
                    create Sales Return
                </button>
            </Link>
    </>
  )
}

export default CreateSalesReturnButton