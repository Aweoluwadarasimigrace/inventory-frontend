import { useRegister } from '@/(auth)/hooks/useRegister';
import React, { useState } from 'react'
import { useCreateCustomer } from '../hooks/useCreateCustomer';
import CountryDropdown from './countrydropdown';

const CreateCustomerForm = () => {
    const { countryValue } = useRegister()
    const [selectedcode, setselectedcode] = useState();
    const [isOpen, setisOpen] = useState(false);


    const { changeFormDetails, errors } = useCreateCustomer()
    return (
        <>
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

                        {/* 3. Email */}
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

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                            <textarea name='address'
                                onChange={changeFormDetails}
                                value={formData.email || ""}
                                placeholder="Enter Your Address"
                                className="w-full border border-slate-300 rounded-md px-4 py-2">

                            </textarea>
                            {errors.address && <small className="text-red-500">{errors.address}</small>}
                        </div>

                     <CountryDropdown/>

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
        </>
    )
}

export default CreateCustomerForm