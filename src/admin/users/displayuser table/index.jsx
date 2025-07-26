import React from 'react'
import { useFetchusers } from '../hooks/useFetchusers'
import { FaTrash, FaEdit } from "react-icons/fa";
const DisplayUserTable = () => {
    const {users} = useFetchusers()
    console.log(users)
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white border border-slate-200 rounded-xl shadow-md p-4 flex flex-col gap-3 transition hover:shadow-lg"
        >
          {/* Profile Header */}
          <div className="flex items-center gap-3">
            <img
              src={user.profilepicture}
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.firstname} {user.lastname}</h2>
              <p className="text-sm text-slate-500">@{user.username}</p>
            </div>
          </div>

          {/* Details */}
          <div className="text-sm text-slate-700 space-y-1">
            <p><span className="font-medium">Role:</span> {user.role}</p>
            <p><span className="font-medium">Gender:</span> {user.gender}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Phone:</span> {user.contact}</p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-2">
            <button
              className="text-blue-600 hover:text-blue-800"
              title="Edit"
            >
              <FaEdit size={18} />
            </button>
            <button
              className="text-red-600 hover:text-red-800"
              title="Delete"
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayUserTable