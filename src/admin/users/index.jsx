import React, { useEffect } from 'react'

import DisplayUserTable from './displayuser table'
import CreateUserButton from './createusers/createuserbutton'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'
import Loader from '@/sharedComponent/loader'
import SearchInput from './searchInput'

const AdminUsersPage = () => {
    const {adminUser, loading, fetchAdminUser}= useAdminUserStore()
    useEffect(() => {
    fetchAdminUser(); // <--- This must be here
  }, []);
  
  
    if (loading) {
        return (
           <Loader/>
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
        <div className="min-h-screen bg-gray-100">
      {/* HEADER: Left-Aligned */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-[#676e8a]">User Management</h1>
        <p className='text-gray-600 '>Manage Your Users</p>
      </div>

      {/* Controls: Search + Create */}
       <div className="max-w-7xl mx-auto p-6">
        {/* Top Controls: Search + Create User */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
         <SearchInput/>
          <CreateUserButton />
        </div>

        {/* USER TABLE */}
        <DisplayUserTable />
      </div>
    </div>
    )
}

export default AdminUsersPage