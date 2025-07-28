import useUserStore from '@/store/getCurrentUser'
import React, { useEffect } from 'react'
import Header from './header'
import Sidebar from './component'
import Loader from '@/sharedComponent/loader'

const Dashboard = () => {
  const {fetchUser,user}= useUserStore()
    useEffect(() => {
    fetchUser()
  }, [])

  if(user === null){
    return(<Loader/>)
  }
  return (
  <div>
     <Header user={user}/>
   <Sidebar/>
  </div>
  )
}

export default Dashboard