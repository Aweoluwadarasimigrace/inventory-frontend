import useCustomerStore from '@/store/getCustomers'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'
import React from 'react'
import DeleteAndEditDropdown from '../deletandeditdropdown'

const DisplayCustomerTable = () => {
  const { customers } = useCustomerStore()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {customers?.map((customer) => (
          <div
            key={customer._id}
            className="bg-white border border-purple-600  rounded-lg  p-4 shadow"
          >
            {/* Profile Image and Name */}
            <div className="flex items-center justify-between gap-4">
              {/* Left Side: Image + Info */}
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="font-semibold text-lg text-slate-800">
                    firstname: {customer.firstname}
                  </h2>
                  <p className="text-sm text-slate-500">lastname: {customer.lastname}</p>
                </div>
              </div>

              {/* Right Side: Dropdown */}
              <DeleteAndEditDropdown customerId={customer._id} />
            </div>


            {/* Details */}
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <p><span className="font-medium">Phone:</span> {customer.contact}</p>
              <p><span className="font-medium">Address:</span> {customer.address}</p>
              <p><span className="font-medium">city:</span> {customer.city}</p>
              <p><span className="font-medium">state:</span> {customer.state}</p>
              <p><span className="font-medium">Country:</span> {customer.country}</p>
            </div>

          </div>
        ))}
      </div>
    </>

  )
}

export default DisplayCustomerTable