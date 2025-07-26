import React from 'react'
import { useFetchusers } from '../hooks/useFetchusers'

const DisplayUserTable = () => {
    const {users} = useFetchusers()
  return (
    <div>
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-slate-200 shadow rounded">
        <thead>
          <tr className="bg-slate-100 text-slate-600 text-left text-sm uppercase">
            <th className="p-3">Image</th>
            <th className="p-3">First Name</th>
            <th className="p-3">Last Name</th>
            <th className="p-3">Username</th>
            <th className="p-3">Role</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="border-t hover:bg-slate-50">
              <td className="p-3">
                <img
                  src={user.profilepicture}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="p-3">{user.firstname}</td>
              <td className="p-3">{user.lastname}</td>
              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.gender}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.contact}</td>
              <td className="p-3 flex items-center gap-4 justify-center">
                <button
                  onClick={() => onUpdate(user)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(user._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default DisplayUserTable