import React from 'react'
import { Link } from 'react-router'

const CreateSalesButton = () => {
  return (
    <>
      <Link to={"/dashboard/createsales"} >
                <button className="bg-purple-600 px-4 py-2 rounded text-white">
                    create Sales
                </button>
            </Link>
    </>
  )
}

export default CreateSalesButton