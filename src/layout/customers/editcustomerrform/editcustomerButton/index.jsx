import React, { useState } from 'react'
import EditCustomerForm from '..'

const EditCustomerButton = ({customerId}) => {
   const [modal, setmodal] = useState(false)
    const handleEditclick = ()=>{
        setmodal(true)
    }
  return (
    <div>
        <button onClick={handleEditclick} className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">Edit</button>
        <EditCustomerForm open={modal} onClose={()=> setmodal(false)} customerId={customerId} />
    </div>
  )
}

export default EditCustomerButton