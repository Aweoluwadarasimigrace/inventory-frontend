import React, { useState } from 'react'
import CreateuserForm from '..'
import { Link } from 'react-router'
import useUserStore from '@/store/getCurrentUser'
import { toast } from 'sonner'

const CreateUserButton = () => {
    const { user} = useUserStore()
    if (user.role !== "admin") {
        return toast.error("You are not authorized to create users");
    }
    return (
        <div>
            <Link to={"/dashboard/createuser"} >
                <button className="bg-purple-600 px-4 py-2 rounded text-white">
                    create User
                </button>
            </Link>
        </div>
    )
}

export default CreateUserButton