
import React from 'react'

const Header = ({user}) => { 
    console.log(user, "lol")
  return (
     <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img  src="/frontend-removebg-preview (1).png" alt="Logo" className="h-8 w-auto object-contain" />
      </div>

      {/* Right Profile Section */}
      <div className="flex items-center gap-3">
        <img
           src={user?.profilepicture || "/fallback.jpg"} 
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="hidden sm:inline text-sm font-medium text-gray-800">
        {user?.companyName}
        </span>
      </div>
    </header>
  )
}

export default Header