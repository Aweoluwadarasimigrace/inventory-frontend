import { apiClient } from '@/lib/client'
import Loader from '@/sharedComponent/loader'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { toast } from 'sonner'

const ProtectedRouteLayout = () => {
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(true)
    const verifySessionisstillValid = async () => {
        try {
            const res = await apiClient.get('/auth/verify', {
                withCredentials: true,
            })
            setisLoading(false)
        } catch (error) {
            toast.error("Your session has expired, please log in again.")
            navigate("/auth/login")
        }
    }

    useEffect(() => {
        verifySessionisstillValid()

    }, [])

    if (isLoading) {
        return <Loader/>
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ProtectedRouteLayout