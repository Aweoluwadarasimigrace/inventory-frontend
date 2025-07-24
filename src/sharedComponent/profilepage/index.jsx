import useUserStore from '@/store/getCurrentUser'
import React from 'react'
import AdminProfile from './adminprofilepage'
import SalesProfile from './salesrepProfilepage'

const ProfilePage = () => {
    const { user } = useUserStore()

    if (!user) { return (<div class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>)}
    if(user.role === "admin"){
        return <AdminProfile/>
    }else if(user.role === "sales"){
        return <SalesProfile/>
    }else{
        return <div className="text-red-500">Unknown user role</div>
    }
}

export default ProfilePage