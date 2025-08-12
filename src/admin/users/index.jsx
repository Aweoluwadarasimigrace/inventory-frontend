import React, { useEffect } from 'react'

import DisplayUserTable from './displayuser table'
import CreateUserButton from './createusers/createuserbutton'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'
import Loader from '@/sharedComponent/loader'
import PdfDownloadButton from './pdfdownloadbutton'
import NotCreatedYet from '@/sharedComponent/notcreatedyet'

const AdminUsersPage = () => {
  const { adminUser, loading, fetchAdminUser } = useAdminUserStore()
  useEffect(() => {
    fetchAdminUser(); // <--- This must be here
  }, []);


  if (loading) {
    return (
      <Loader />
    )
  }
  if (adminUser?.length === 0) {
    return (
     
      <NotCreatedYet name={"users"} />
    );
  }
  return (
    <div className="min-h-full bg-gray-100">
      {/* HEADER + BUTTON: Responsive Side by Side */}
      <div className="max-w-9xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
  <div>
    <h1 className="text-2xl font-bold text-[#676e8a]">User Management</h1>
    <p className="text-gray-600">Manage Your Users</p>
    <p className="text-gray-500 text-sm">
      A dashboard provides you an overview of user list with access to the most important data,
      functions and controls.
    </p>
  </div>

  <div className="flex gap-x-2">
    <PdfDownloadButton />
    <CreateUserButton />
  </div>
</div>


      {/* USER TABLE BELOW */}
      <div className="max-w-9xl mx-auto p-2 md:p-4">
        <DisplayUserTable />
      </div>
    </div>
  )
}

export default AdminUsersPage