import useUserStore from '@/store/getCurrentUser'
import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa6'
import { toast } from 'sonner'

const AdminProfile = () => {
    const { updateuser, user } = useUserStore()
    const [profileImage, setprofileImage] = useState("")

    const handleprofileimage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onloadend = () => {
            const basestring = reader.result
            setprofileImage(basestring)
        }
        reader.readAsDataURL(file)
    }

    const submitform = async (e) => {
        e.preventDefault()
        const formData = { profileImage }
        console.log(formData)
        try {
            await updateuser(formData)
            toast.success("profile image updated usccessfully")
        } catch (error) {
            console.log(error)
            toast.error("couldn't update try again")
        }
    }

    return (
        <>
            <div className="min-h-screen w-full bg-purple-100 px-8 py-12">
                <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">
                    My Profile
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 items-start justify-center w-full max-w-[1300px] mx-auto">
                    {/* Profile Picture Section */}
                    <div className="flex flex-col items-center gap-6 w-full lg:w-[30%]">
                        {/* Image with overlay camera icon */}
                        <div className="relative w-44 h-44 rounded-full bg-purple-200 overflow-hidden">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />

                            {/* Camera Icon Overlay */}
                            <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
                                <FaCamera size={16} className="text-gray-700" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleprofileimage}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 w-full lg:w-[70%]" onSubmit={submitform}>
                        <div>
                            <label className="block text-gray-700 mb-2">Company Name</label>
                            <input
                                type="text"
                                disabled
                                value={user?.companyName}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={user?.email}
                                disabled
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-white rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                disabled

                                placeholder="+1234567890"
                                className="w-full px-4 py-3 bg-white  rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Role</label>
                            <input
                                type="text"
                                placeholder="Admin"
                                disabled
                                value={user?.role}
                                className="w-full px-4 py-3 bg-gray-100 text-gray-500 border rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">country</label>
                            <input
                                type="text"
                                disabled
                                value={user?.country}
                                placeholder="123 Business St"
                                className="w-full px-4 py-3 bg-white rounded-md"
                            />
                        </div>
                        <div className="flex justify-center mt-14 gap-6">
                            <button className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition" type='submit'>
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminProfile