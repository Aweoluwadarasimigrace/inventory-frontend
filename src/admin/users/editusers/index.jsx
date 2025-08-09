import React, { useState } from 'react'
import { useEditUsers } from '../hooks/useEditUsers'
import EditUserForm from './edituserform'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'

const EditAdminUser = ({userId}) => {
  const [modal, setmodal] = useState(false)

  const handleEditClick = ()=>{
    setmodal(true)
  }
  return (
    <div>
      <button onClick={handleEditClick} className="bg-blue-600 text-white px-4 py-2 rounded">
        Edit User
      </button>

      <EditUserForm open={modal} onClose={() => setmodal(false)} userId = {userId} />
    </div>
  )
}

export default EditAdminUser