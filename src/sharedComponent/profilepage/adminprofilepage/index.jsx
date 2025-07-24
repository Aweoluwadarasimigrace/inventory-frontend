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
        <div className="min-h-screen w-full bg-purple-50">
  <div className="max-w-7xl mx-auto p-4 sm:p-3 lg:p-3">

    {/* HEADER */}
    <div className="mb-10 text-left">
      <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
        My Profile
      </h1>
      <p className="text-slate-500 mt-1">
        Manage your personal and company information.
      </p>
    </div>

    {/* PROFILE IMAGE ON TOP */}
    <div className="w-full flex justify-center mb-10">
      <div className="relative w-36 h-36 rounded-full">
        <img
          src={profileImage || user?.profilepicture}
          alt="Profile"
          className="w-full h-full object-cover rounded border-4 border-white"
        />
        <label className="absolute bottom-1 right-1 bg-violet-600 p-2 rounded-full cursor-pointer hover:bg-violet-700 transition-colors">
          <FaCamera size={14} className="text-white" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleprofileimage}
          />
        </label>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 items-start">

      {/* PROFILE FORM */}
      <div className="w-full">
        <form
          className="border border-slate-200 bg-white rounded-xl"
          onSubmit={submitform}
        >
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-800">
              Profile Settings
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.companyName || ''}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg bg-slate-100 text-slate-700 cursor-not-allowed focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || ''}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg bg-slate-100 text-slate-700 cursor-not-allowed focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  disabled
                  placeholder="+1 234 567 890"
                  value={user?.phoneNumber || ''}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg bg-slate-100 text-slate-700 cursor-not-allowed focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.role || ''}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg bg-slate-100 text-slate-500 cursor-not-allowed focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.country || ''}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg bg-slate-100 text-slate-700 cursor-not-allowed focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="bg-slate-100 px-6 py-4 rounded-b-xl flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default AdminProfile