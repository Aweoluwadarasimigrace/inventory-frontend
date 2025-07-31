import React, { useState } from 'react'
import { FaChartBar, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { FaBars, FaBox, FaUser, FaUsers } from 'react-icons/fa6'
import { Link } from 'react-router'

const SideBarComponent = () => {

    const menuBar = [
        { name: "Dashboard", icon:<FaHome/>, path: "/dashboard" },
        { name: "Users", icon: <FaUsers />, path: "/dashboard/createuser" },
        { name: "Products", icon: <FaBox />, path: "products" },
        { name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
        { name: "Reports", icon: <FaChartBar />, path: "/dashboard/reports" },
        { name: "Sales", icon: <FaBox />, path: "/dashboard/sales" },
        { name: "Profile", icon: <FaUser />, path: "/profile" },
        { name: "Logout", icon: <FaSignOutAlt />, path: "/auth/login" },
    ]

    const [isOpen, setisOpen] = useState(false)

    const toggleSidebar = () => { setisOpen(!isOpen) }
    const closeSidebar = () => { setisOpen(false) }
      return (
     <>
      {/* Backdrop when sidebar is open on mobile */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}

      {/* Hamburger toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 p-2 bg-purple-600 text-white rounded md:hidden"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-purple-700 text-white z-40 flex flex-col transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-0 overflow-hidden"}
        md:w-64 md:overflow-visible`}
      >
        {/* Logo and toggle */}
        <div className="flex items-center justify-between gap-2 px-4 h-16">
          {isOpen && (
            <h1 className="text-xl font-bold text-white">
              TRACKSTACK
            </h1>
          )}
          <FaBars
            onClick={toggleSidebar}
            className="text-2xl md:hidden cursor-pointer"
          />
        </div>

        {/* Menu items */}
        <nav className="flex flex-col gap-2 mt-4">
          {menuBar.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={closeSidebar}
              className="flex items-center gap-4 px-4 py-2 hover:bg-purple-600 transition-all"
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`text-sm transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default SideBarComponent