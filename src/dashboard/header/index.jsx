
import React, { useState } from 'react'

const Header = ({user}) => { 
     const [open, setopen] = useState(false)
  return (
     <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img  src="/frontend-removebg-preview (1).png" alt="Logo" className="h-8 w-auto object-contain" />
      </div>

     <div className="relative">
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

        {/* Animated Dropdown */}
        <div
          className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-50 transition-all duration-200 ease-out transform ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* User Info Block */}
          <div className="px-4 py-3 border-b">
            <div className="flex items-center gap-3">
              <img
                src={user.profilepicture}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-500">
                {user.role}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-800">{user.name}</p>
          </div>

          {/* Dropdown Options */}
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
            Profile
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
             Settings
          </button>
          <button
            onClick={() => console.log("Logging out...")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center gap-2"
          >
             Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header