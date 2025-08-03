import React, { useState } from 'react'
import { FaChartBar, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { FaBars, FaBox, FaUser, FaUsers } from 'react-icons/fa6'
import { Link } from 'react-router'

const SideBarComponent = () => {

    const menuBar = [
        { name: "Dashboard", icon:<FaHome/>, path: "/dashboard" },
        { name: "Users", icon: <FaUsers />, path: "/dashboard/users" },
        { name: "Products", icon: <FaBox />, path: "products" },
        { name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
        { name: "Reports", icon: <FaChartBar />, path: "/dashboard/reports" },
        { name: "Sales", icon: <FaBox />, path: "/dashboard/sales" },
        { name: "Profile", icon: <FaUser />, path: "/profile" },
        { name: "Logout", icon: <FaSignOutAlt />, path: "/auth/login" },
    ]

    const [isOpen, setisOpen] = useState(true)
    const toggleSidebar = () => { setisOpen(!isOpen) }
  return (
     <>
      {/* Hamburger Icon: only visible on md and smaller */}
      <div className="lg:hidden fixed top-2 left-4 z-50 ">
        <FaBars
          onClick={toggleSidebar}
          className="text-[45px] text-purple-700 p-2 cursor-pointer"
        />
      </div>

      {/* Dark overlay on small screen when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          h-screen bg-purple-700 text-white flex flex-col transition-all duration-300
          ${isOpen ? "w-64" : "w-16"}
          ${isOpen ? "left-0" : "-left-full"} 
          fixed top-0 z-50
          lg:static lg:left-0 lg:z-0 lg:flex
        `}
      >
        {/* Logo + toggle (still used in all views) */}
        <div
          className="flex items-center justify-between gap-2 px-4 h-16 cursor-pointer"
          onClick={toggleSidebar}
        >
          {isOpen && (
            <h1 className="text-xl font-bold text-white">
              TRACKSTACK
            </h1>
          )}
          <FaBars className="text-2xl" />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 mt-4">
          {menuBar.map((item, index) => (
            <Link to={item.path} key={index} onClick={() => setisOpen(true)}>
              <div className="flex items-center gap-4 px-4 py-2 hover:bg-purple-600 cursor-pointer transition-all">
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`text-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default SideBarComponent