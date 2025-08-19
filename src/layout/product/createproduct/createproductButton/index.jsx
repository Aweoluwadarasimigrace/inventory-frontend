import React from 'react'
import { Link } from 'react-router'

const CreateProductButton = () => {
    return (
        <>
            <Link to={"/dashboard/createproduct"} >
                <button className="bg-purple-600 px-4 py-2 rounded text-white">
                    create Product
                </button>
            </Link>
        </>
    )
}

export default CreateProductButton