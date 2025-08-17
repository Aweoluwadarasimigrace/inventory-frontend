import React, { useState } from 'react'
import EditCustomerForm from '..'

const EditCustomerButton = ({customerId}) => {
   const [modal, setmodal] = useState(false)
    const handleEditclick = ()=>{
        setmodal(true)
    }
  return (
    <div>
        <button onClick={handleEditclick}>edit</button>

        <EditCustomerForm open={modal} onClose={()=> setmodal(false)} customerId={customerId} />
    </div>
  )
}

export default EditCustomerButton