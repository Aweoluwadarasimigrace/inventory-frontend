import useCustomerStore from '@/store/getCustomers'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'
import React from 'react'

const DisplayCustomerTable = () => {
  const {customers} = useCustomerStore()
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
    <img
      src={customer.profilepicture}
      alt="Profile"
      className="w-14 h-14 rounded-full object-cover"
    />
    <div>
      <h2 className="font-semibold text-lg text-slate-800">
        Name: {customer.firstname}
      </h2>
      <p className="text-sm text-slate-500">Email: {customer.email}</p>
    </div>
  </div>

  {/* Right Side: Dropdown */}
  <DeleteEditDropdown userId={customer._id} />
</div>


      {/* Details */}
      <div className="mt-4 text-sm text-slate-700 space-y-1">
        <p><span className="font-medium">Username:</span> {customer.username}</p>
        <p><span className="font-medium">Role:</span> {customer.role}</p>
        <p><span className="font-medium">Gender:</span> {customer.gender}</p>
        <p><span className="font-medium">Phone:</span> {customer.contact}</p>
         <p>
          <span className="font-medium">Verified:</span>{" "}
          {customer.verified ? (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
              Verified
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
              Not Verified
            </span>
          )}
        </p>
      </div>

    </div>
  ))}
</div>
</>
   
  )
}

export default DisplayCustomerTable