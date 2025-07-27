import React from 'react'

import DisplayUserTable from './displayuser table'
import CreateUserButton from './createusers/createuserbutton'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'

const AdminUsersPage = () => {
    const {adminUser, loading}= useAdminUserStore()
    console.log(adminUser)
    if (loading) {
        return (
            <div className='flex items-center justify-center'>
                <div class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
        )
    }
   if (adminUser.length === 0) {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-purple-500 text-white">
            <p className="text-lg text-center">No users created yet.</p>
        </div>
    );
}
    return (
        <div>
            <CreateUserButton/>
           <DisplayUserTable/>   
        </div>
    )
}

export default AdminUsersPage