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
<div className="flex h-screen w-full bg-gray-100 overflow-hidden">
  {/* Sidebar fixed on the left */}
  <div className="h-full">
    <SideBarComponent />
  </div>

  {/* Right side: Header + content */}
  <div className="flex flex-col flex-1 overflow-hidden">
    {/* Header at the top */}
    <Header user={user} />

    {/* Main Content */}
    <div className="flex-1 bg-gray-100 p-1 lg:p-4 overflow-y-auto">
      <Outlet context={{ user }} />
    </div>
  </div>
</div>


  )
}

export default DashboardLayout;