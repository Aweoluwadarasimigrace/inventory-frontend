import React from 'react'

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