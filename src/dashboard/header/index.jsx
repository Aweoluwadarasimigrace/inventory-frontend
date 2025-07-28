
import React from 'react'

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
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Animated Dropdown */}
        <div
          className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50 transition-all duration-200 ease-out transform ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
          Profile
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
         Settings
          </button>
          <button
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