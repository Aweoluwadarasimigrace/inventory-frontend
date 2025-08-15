import React from 'react'
import { Link } from 'react-router'

const CreateCustomerButton = () => {
  return (
    <div>
        <div>
            <Link to={"/dashboard/createcustomer"} >
                <button className="bg-purple-600 px-4 py-2 rounded text-white">
                    create Customer
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CreateCustomerButton