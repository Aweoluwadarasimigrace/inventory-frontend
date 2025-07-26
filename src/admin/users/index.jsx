import React from 'react'
import { useFetchusers } from './hooks/useFetchusers'
import DisplayUserTable from './displayuser table'
import CreateUserButton from './createusers/createuserbutton'

const AdminUsersPage = () => {
    const { users, isLoading } = useFetchusers()
    if (isLoading) {
        return (
            <div className='flex items-center justify-center'>
                <div class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
        )
    }

    if (users.length === 0) {
        return (
            <div className="text-center flex items-center justify-center mt-10 text-white bg-purple-500">
                <p className="text-lg">No users created yet.</p>
            </div>
        )
    }
    return (
        <div>
            <CreateUserButton/>
           <DisplayUserTable/>   
        </div>
    )
}

export default AdminUsersPage