
import React, { useState } from 'react'
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import NotificationBell from '../component/notification bell';
const Header = ({ user }) => {
    const [open, setopen] = useState(false)
    return (
      <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Menu Button */}
      <button className="md:hidden text-xl text-gray-700">
        <FaBars />
      </button>

      {/* Add Sales Button - shown on medium and above */}
      <button className="hidden md:inline-flex bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        Add Sales
      </button>

      {/* Right side: Notification + Profile */}
      <div className="flex items-center gap-4 relative">
        <NotificationBell />

        <div
          onClick={() => setopen(!open)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={user?.profilepicture}
            alt="Profile"
            className="h-10 w-10 rounded object-cover"
          />
        </div>

        {/* Dropdown */}
        <div
          className={`absolute right-0 top-14 w-52 bg-white rounded-lg shadow-md z-50 transition-all duration-200 ease-out transform ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* User Info */}
          <div className="px-4 py-3 border-b border-purple-400">
            <div className="flex items-center gap-3">
              <img
                src={user.profilepicture}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-b-2 border-purple-500"
              />
              <div className="flex flex-col">
                <span className="mt-1 text-sm font-bold text-gray-800">
                  {user.companyName}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {user.role}
                </span>
              </div>
            </div>
          </div>

          {/* Dropdown Options */}
          <button className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
            <FaUser className="text-purple-500" /> Profile
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2">
            <FaCog className="text-purple-500" /> Settings
          </button>
          <button
            onClick={() => console.log("Logging out...")}
            className="w-full text-left px-4 py-2 hover:bg-purple-100 hover:text-purple-700 text-red-500 flex items-center gap-2"
          >
            <FaSignOutAlt className="text-purple-500" /> Logout
          </button>
        </div>
      </div>
    </header>
    )
}

export default Header