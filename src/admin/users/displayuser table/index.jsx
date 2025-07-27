import React from 'react'
import useAdminUserStore from '@/store/getUserCreatedByAdmin'
const DisplayUserTable = () => {
   const {adminUser} = useAdminUserStore()
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {adminUser.map((user) => (
    <div
      key={user._id}
      className="bg-white border border-purple-600  rounded-lg  p-4 shadow"
    >
      {/* Profile Image and Name */}
      <div className="flex items-center gap-4">
        <img
          src={user.profilepicture}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg text-slate-800">
           Name:{user.firstname} {user.lastname}
          </h2>
          <p className="text-sm text-slate-500">Email:{user.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 text-sm text-slate-700 space-y-1">
        <p><span className="font-medium">Username:</span> {user.username}</p>
        <p><span className="font-medium">Role:</span> {user.role}</p>
        <p><span className="font-medium">Gender:</span> {user.gender}</p>
        <p><span className="font-medium">Phone:</span> {user.contact}</p>
         <p>
          <span className="font-medium">Verified:</span>{" "}
          {user.verified ? (
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

      {/* Actions */}
      <div className="flex gap-4 mt-4">
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  ))}
</div>
  )
}

export default DisplayUserTable