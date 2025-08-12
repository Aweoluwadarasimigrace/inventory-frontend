import React, { useState } from 'react'
import EditUserForm from './edituserform'
const EditAdminUser = ({userId}) => {
  const [modal, setmodal] = useState(false)

  const handleEditClick = ()=>{
    setmodal(true)
  }
  return (
    <div>
      <button onClick={handleEditClick}>
        Edit User
      </button>

      <EditUserForm open={modal} onClose={() => setmodal(false)} userId = {userId} />
    </div>
  )
}

export default EditAdminUser