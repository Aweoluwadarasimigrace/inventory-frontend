
import React, { useState } from 'react'
import NotificationBell from '../component/notification bell';
import ProfileIcon from '../component/profile icon';
import SimpleDropdown from '../component/hiddenmenubar';
const Header = ({ user }) => {
  const [open, setopen] = useState(false)
  return (
   <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
  {/* Left Side - Header Title */}
  <h1 className="text-xl font-bold text-black w-full text-center lg:hidden">
    TRACKSTACK
  </h1>
<h1></h1>
  {/* Right Side: Add Sales + Notification + Profile */}
  <div className="items-center gap-4 relative hidden lg:flex">
    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-sm">
      Add Sales
    </button>
    <NotificationBell />
    <ProfileIcon user={user} open={open} setopen={setopen} />
  </div>
   <SimpleDropdown/>
</header>

  )
}

export default Header