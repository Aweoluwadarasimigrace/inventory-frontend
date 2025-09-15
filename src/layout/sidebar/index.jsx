import React, { useState } from 'react'
import { FaChartBar, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa'
import { FaBars, FaBox, FaUser, FaUsers } from 'react-icons/fa6'
import { Link } from 'react-router'
import { GoDotFill } from "react-icons/go";

const SideBarComponent = () => {

  const menuBar = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    {
      name: "People", icon: <FaUsers />, subItems: [
        { name: "Employees", path: "/dashboard/users" },
        { name: "add Employees", path: "/dashboard/createuser" },
        { name: "customers", path: "/dashboard/customer" },
        { name: "add customer", path: "/dashboard/createcustomer" },
      ]
    },
    {
      name: "Products", icon: <FaBox />, subItems: [
        { name: "List product", path: "/dashboard/product" },
        { name: "add Product", path: "/dashboard/createProduct" }
      ]
    },
    { name: "Sales", icon: <FaBox />, subItems: [
      { name: "List Sales", path: "/dashboard/sales" },
      { name: "Add Sales", path: "/dashboard/createsales" }
    ]},

    { name: "Sales Return", icon: <FaBox />, subItems: [
      { name: "List Sales Return", path: "/dashboard/salesreturn" },
      { name: "Add Sales Return", path: "/dashboard/createsalesreturn" },
    ]},
    { name: "Purchase", icon: <FaBox />, subItems: [
      { name: "List Purchase", path: "/dashboard/purchase" },
      { name: "Add Purchase", path: "/dashboard/createpurchase" }
    ]},
    { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
    { name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
    { name: "Reports", icon: <FaChartBar />, path: "/dashboard/reports" },
  ]

  const [isOpen, setisOpen] = useState(false)
  const [OpenIndex, setOpenIndex] = useState(null)
  const toggleSidebar = () => { setisOpen(!isOpen) }

  const toggleSubMenu = (index) => {
    setOpenIndex(OpenIndex === index ? null : index)
  }
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
            <div key={index} >
              {/* Main Item */}

              {!item.subItems ? (<Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-2 hover:bg-purple-600 cursor-pointer transition-all ${OpenIndex === index ? "bg-purple-600 text-white" : "text-white"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`text-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                    }`}
                >
                  {item.name}
                </span>
              </Link>) : <div
                className={`flex items-center gap-4 px-4 py-2 hover:bg-purple-600 cursor-pointer transition-all ${OpenIndex === index ? "bg-purple-600 text-white " : "text-white"}`}
                onClick={() => toggleSubMenu(index)}
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`text-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"
                    }  `}
                >
                  {item.name}
                </span>
              </div>
              }

              {/* Sub Items (with safe check + animation) */}
              {item.subItems && (
                <div
                  className={`ml-5 transition-all duration-300 ease-in-out overflow-hidden ${OpenIndex === index && isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {item.subItems.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.path}
                      className=" py-1 mb-2 text-md text-white hover:text-white hover:bg-purple-600 pl-2 flex items-center gap-1"
                    >
                      <GoDotFill size={12} />{subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}

export default SideBarComponent