import useUserStore from '@/store/getCurrentUser'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const {fetchUser, user}= useUserStore()
    useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
   <p>Hello {user?.companyname}</p>
    </div>
  )
}

export default Dashboard