import React from 'react'
import { useFetchusers } from '../hooks/useFetchusers'
import { FaTrash, FaEdit } from "react-icons/fa";
const DisplayUserTable = () => {
    const {users} = useFetchusers()
  return (
      <div className="flex flex-col gap-4 p-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Left Side: Image + Info */}
          <div className="flex items-center gap-4 w-full sm:w-2/3">
            <img
              src={user.profilepicture}
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-base font-semibold">
                {user.firstname} {user.lastname}
              </h2>
              <p className="text-sm text-slate-500">@{user.username}</p>
              <p className="text-sm text-slate-600">{user.email}</p>
              <p className="text-sm text-slate-600">{user.contact}</p>
            </div>
          </div>

          {/* Right Side: Tags + Actions */}
          <div className="flex flex-col sm:items-end gap-2 w-full sm:w-1/3">
            <div className="flex gap-2 text-sm">
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                {user.role}
              </span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                {user.gender}
              </span>
            </div>
            <div className="flex gap-4 justify-start sm:justify-end">
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
        </div>
      ))}
    </div>
  )
}

export default DisplayUserTable