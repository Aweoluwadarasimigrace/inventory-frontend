import useUserStore from '@/store/getCurrentUser'
import React, { useEffect } from 'react'
import Header from './header'
import Sidebar from './component'

const Dashboard = () => {
  const {fetchUser,user}= useUserStore()

  

    useEffect(() => {
    fetchUser()
  }, [])
console.log(user, "user")
  return (
  <div>
     <Header user={user}/>
   <Sidebar/>
  </div>
  )
}

export default Dashboard