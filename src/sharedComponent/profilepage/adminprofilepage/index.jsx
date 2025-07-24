import useUserStore from '@/store/getCurrentUser'
import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa6'
import { toast } from 'sonner'

const AdminProfile = () => {
    const { updateUser, user } = useUserStore()
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
        const formData = { profilepicture: profileImage }
        console.log(formData)
        try {
            await updateUser(formData)
            toast.success("profile image updated usccessfully")
        } catch (error) {
            console.log(error)
            toast.error("couldn't update try again")
        }
    }

    return (
        <>
          <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 to-white px-6 py-12">
  <h2 className="text-4xl font-bold text-purple-900 mb-10 text-center tracking-tight">
    My Profile
  </h2>

  <div className="flex flex-col lg:flex-row gap-10 items-start justify-center w-full max-w-[1200px] mx-auto">
    {/* Profile Picture Section */}
    <div className="w-full lg:w-[30%] flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm flex flex-col items-center">
        <div className="relative w-40 h-40 rounded-full bg-gray-100 overflow-hidden shadow">
          <img
            src={profileImage || user?.profilepicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          {/* Camera Icon Overlay */}
          <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer hover:scale-105 transition">
            <FaCamera size={16} className="text-purple-700" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleprofileimage}
            />
          </label>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">{user?.username}</p>
        <p className="text-sm text-gray-400">{user?.email}</p>
      </div>
    </div>

    {/* Form Section */}
    <form
      className="bg-white p-8 rounded-2xl shadow-md w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
      onSubmit={submitform}
    >
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Company Name</label>
        <input
          type="text"
          disabled
          value={user?.companyName}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-purple-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
        <input
          type="email"
          disabled
          value={user?.email}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-purple-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
        <input
          type="tel"
          disabled
          placeholder="+1234567890"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
        <input
          type="text"
          disabled
          value={user?.role}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
        <input
          type="text"
          disabled
          value={user?.country}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
        />
      </div>

      <div className="sm:col-span-2 flex justify-end mt-6">
        <button
          type="submit"
          className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow transition-all"
        >
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