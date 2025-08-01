import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { toast } from 'sonner'

const ProtectedRouteLayout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const tokenExists = document.cookie.includes("token")
        if (!tokenExists) {
            toast.error("your session has expired, please login again to continue")
            navigate("/auth/login")
        }
    }, [])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ProtectedRouteLayout