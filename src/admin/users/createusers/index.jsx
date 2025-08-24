import React, { useState } from 'react'
import { useCreateUser } from '../hooks/useCreateUser'
import { useRegister } from '@/(auth)/hooks/useRegister'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const CreateuserForm = () => {
  const [showPassword, setshowPassword] = useState(false);
  const { errors, changeFormDetails, handleProfileimage, createUser, isloading, formData } = useCreateUser()
  const { countryValue } = useRegister()
  const [selectedcode, setselectedcode] = useState();
  const [isOpen, setisOpen] = useState(false);
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <div>
      <form className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow space-y-6" onSubmit={createUser}>

        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Create New User</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. firstname */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Firstname</label>
            <input
              type="text"
              name='firstname'
              value={formData.firstname || ""}
              placeholder="Enter your firstname"
              onChange={changeFormDetails}
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.firstname && <small className="text-red-500">{errors.firstname}</small>}
          </div>

          {/* 2. lastname */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">lastname</label>
            <input
              type="text"
              name='lastname'
              onChange={changeFormDetails}
              value={formData.lastname || ""}
              placeholder="Enter your lastname"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.lastname && <small className="text-red-500">{errors.lastname}</small>}
          </div>
          {/* 3.username */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
            <input
              type="text"
              name='username'
              onChange={changeFormDetails}
              value={formData.username || ""}
              placeholder="Enter username"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.username && <small className="text-red-500">{errors.username}</small>}
          </div>

          {/* 4. Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name='email'
              onChange={changeFormDetails}
              value={formData.email || ""}
              placeholder="Enter email"
              className="w-full border border-slate-300 rounded-md px-4 py-2"
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>

          {/* 5. Phone with Code */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <div className="flex gap-2">

              {/* country dropdwonn */}

              <div className='relative w-[130px]'>
                <div onClick={() => setisOpen(!isOpen)} className='w-full p-3 border border-slate-300 rounded-md text-slate-700 cursor-pointer flex items-center justify-between'>
                  {selectedcode || "+234"}
                </div>

                {
                  isOpen && (
                    <div className='absolute z-10 mt-1 w-60 max-h-48 overflow-y-auto border border-slate-300 rounded-md shadow-lg bg-white'>
                      {countryValue.map((country, i) => (
                        <div key={i} onClick={() => {
                          setselectedcode(country.phoneCode)
                          setisOpen(false)
                          changeFormDetails({ target: { name: "countrycode", value: country.phoneCode } })
                        }} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer ">
                          {country.name} ({country.phoneCode})
                        </div>
                      ))}
                    </div>
                  )
                }
              </div>
              <input
                type="tel"
                placeholder="Enter phone"
                name='number'
                value={formData.number || ""}
                onChange={changeFormDetails}
                className="flex-1 border border-slate-300 rounded-md px-4 py-2"
              />
              {errors.number && <small className="text-red-500">{errors.number}</small>}
            </div>
          </div>

          {/* 6. Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                onChange={changeFormDetails}
                value={formData.password || ""}
                placeholder="Enter password"
                className="w-full border border-slate-300 rounded-md px-4 py-2"
              />
              <button type='button' onClick={togglePassword} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password && <small className="text-red-500">{errors.password}</small>}
          </div>
          {/* 8. gender */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
            <select name='gender' onChange={changeFormDetails} value={formData.gender || ""} className="w-full border border-slate-300 rounded-md px-4 py-2">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <small className="text-red-500">{errors.gender}</small>}
          </div>


          {/* 9. Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <select name='role' onChange={changeFormDetails} value={formData.role || ""} className="w-full border border-slate-300 rounded-md px-4 py-2">
              <option value="">Select role</option>
              <option value="product manager">product manager</option>
              <option value="sales representative">sales reprsentative</option>
            </select>
            {errors.role && <small className="text-red-500">{errors.role}</small>}
          </div>

          {/* 7. Profile Image (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Profile Image</label>
            <input
              type="file"
              onChange={handleProfileimage}
              accept="image/*"
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            {errors.profilepicture && <small className="text-red-500">{errors.profilepicture}</small>}
          </div>


        </div>
        {/* Submit button */}
        <div className="pt-4 flex gap-2 justify-end">
          <button
            type="submit" className="w-3xs cursor-pointer bg-purple-500 text-white py-3 rounded-md text-lg font-semibold">
            {isloading ? "loading" : "Create User"}
          </button>

        </div>
      </form>
    </div>
  )
}

export default CreateuserForm