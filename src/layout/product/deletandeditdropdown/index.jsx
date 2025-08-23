import useProductStore from '@/store/getproduct';
import React, { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import EditProductButton from '../editproductform/editproductbutton';

const DeleteAndEditDropdown = ({ productId }) => {
     const [open, setOpen] = useState(false)
     const { removeProduct } = useProductStore();
  return (
    <>
         <div className="relative inline-block text-left">
            <div className="relative text-left block">
                {/* Toggle Button */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="text-[20px] text-purple-600 hover:text-black"
                >
                    <FiMoreVertical />
                </button>

                {/* Dropdown Menu */}
                <div
                    className={`absolute right-0 mt-2 w-36 bg-white rounded shadow-lg text-sm overflow-hidden transition-all duration-200 z-50 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col">
                       <EditProductButton productId={productId} />
                        <button className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2" onClick={() => removeProduct(productId)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DeleteAndEditDropdown