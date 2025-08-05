import useUserStore from '@/store/getCurrentUser'
import React, { useEffect } from 'react'
import Header from './header'
import Loader from '@/sharedComponent/loader'
import { Outlet } from 'react-router'
import SideBarComponent from './sidebar'

const DashboardLayout = () => {
  const {fetchUser,user}= useUserStore()
    useEffect(() => {
    fetchUser()
  }, [])

  if(user === null){
    return(<Loader/>)
  }
  return (
 <div className="flex h-screen w-full">
  {/* Sidebar fixed on the left */}
  <div className="h-full">
    <SideBarComponent />
  </div>

  {/* Right side: Header + content */}
  <div className="flex flex-col flex-1">
    {/* Header at the top */}
    <Header user={user} />

    {/* Main Content (you can remove this if not needed now) */}
    <div className="flex-1 bg-gray-100 p-2 overflow-y-auto">
      <Outlet />
    </div>
  </div>
</div>

  )
}

export default DashboardLayout;