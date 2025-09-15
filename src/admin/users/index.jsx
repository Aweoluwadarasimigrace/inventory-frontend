import React, { useEffect } from 'react'

import DisplayUserTable from './displayuser table'
import CreateUserButton from './createusers/createuserbutton'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'
import Loader from '@/sharedComponent/loader'
import PdfDownloadButton from './pdfdownloadbutton'
import { Link } from 'react-router'

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
      <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg shadow-sm h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Start Managing Your User Activities!
        </h1>
        <p className="text-gray-600 mb-1">
          Create, customize, and manage your Employee effectively.
        </p>
        <p className="text-gray-600 mb-4">
          Click the button below to add your first Employee
        </p>
        <Link to={"/dashboard/createuser"}>
          <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition">
            Add Employee
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-full bg-gray-100">
      {/* HEADER + BUTTON: Responsive Side by Side */}
      <div className="max-w-9xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#676e8a]">Employee Management</h1>
          <p className="text-gray-600">Manage Your Employee</p>
          <p className="text-gray-500 text-sm">
            A dashboard provides you an overview of Employee list with access to the most important data,
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