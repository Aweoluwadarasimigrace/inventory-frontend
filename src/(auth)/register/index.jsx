import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";
import { useRegister } from "../hooks/useRegister";

const RegisterUser = () => {
  const [showPassword, setshowPassword] = useState(false);
  const { changeFormDetails, submitForm, isLoading, countryValue, errors } =
    useRegister();
  const [selectedcode, setselectedcode] = useState();
  const [isOpen, setisOpen] = useState(false);
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <>
     <div className='bg-[#7a43a446] min-h-screen flex flex-col'>
            {/* HEADER: Contains logo and login button */}
            <header className="flex justify-between items-center p-4 md:px-8">
              <Link to="/">
                <img
                  src="/frontend-removebg-preview (1).png"
                  alt="Logo"
                  className="w-[140px] md:w-[160px] object-contain"
                />
              </Link>
              <Link to="/auth/login">
                <button className="bg-purple-500 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-colors">
                  Login
                </button>
              </Link>
            </header>
    
            {/* MAIN CONTENT: Centers the form both vertically and horizontally */}
            <main className="flex flex-grow items-center justify-center p-4">
              <div className="relative w-full max-w-xl bg-white shadow-2xl rounded-2xl">
    
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="mb-3 text-3xl md:text-4xl font-bold text-slate-800">Create Account</span>
                  <span className="font-light text-slate-500 mb-8">
                    Track. Manage. Grow.
                  </span>
    
                  {/* FORM: All original functions and names are preserved */}
                  <form onSubmit={submitForm}>
    
                    {/* Company Name */}
                    <div className="md:col-span-2">
                      <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-slate-700">Company Name</label>
                      <input
                        type="text"
                        id="companyName"
                        name='companyName'
                        onChange={changeFormDetails}
                        placeholder="Your Company Inc."
                        className="w-full mb-2 p-3 border border-slate-300 rounded-lg placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      {errors.name && <small className="text-red-500">{errors.name}</small>}
                    </div>
    
                    {/* Email */}
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name='email'
                        onChange={changeFormDetails}
                        placeholder="your.email@example.com"
                        className="w-full mb-2 p-3 border border-slate-300 rounded-lg placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      {errors.email && <small className="text-red-500">{errors.email}</small>}
                    </div>
    
                    {/* Phone Number with Country Code */}
                    <div className="md:col-span-2">
    
                      <label className="block mb-2 text-sm font-medium text-slate-700">Phone Number</label>
    
                      <div className="flex gap-2">
                        {/* Country Code Dropdown */}
                        <div className="relative w-[130px]">
                          <div className="w-full p-3 border border-slate-300 rounded-lg bg-white text-slate-700 cursor-pointer flex items-center justify-between" onClick={() => setisOpen(!isOpen)}>
                            {selectedcode || "Code"}
                          </div>
                          {isOpen && (
                            <div className="absolute z-10 mt-1 w-100 max-h-48 overflow-y-auto border border-gray-300 bg-white rounded-lg shadow-lg">
                              {countryValue.map((country, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    setselectedcode(country.phoneCode);
                                    setisOpen(false);
                                    changeFormDetails({ target: { name: "countrycode", value: country.phoneCode } });
                                  }}
                                  className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
                                >
                                  {country.name} ({country.phoneCode})
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
    
                        {/* Phone Number Input - STYLING UNIFIED */}
                        <input
                          type="tel"
                          name="number"
                          placeholder="Phone number"
                          onChange={changeFormDetails}
                          className="w-full mb-2 p-3 border border-slate-300 rounded-lg placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      {errors.number && <small className="text-red-500 mt-1 block">{errors.number}</small>}
                    </div>
    
                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-700">Password</label>
                      <div className='relative'>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={changeFormDetails}
                          placeholder="Create a strong password"
                          className="w-full mb-2 p-3 border border-slate-300 rounded-lg placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <button type="button" onClick={togglePassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </button>
                      </div>
                      {errors.password && <small className="text-red-500">{errors.password}</small>}
                    </div>
    
    
                    {/* Country Select */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">Select your country</label>
                      <select
                        name="country"
                        onChange={changeFormDetails}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        {countryValue.map((country, i) => (
                          <option key={i} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      {errors.country && <small className="text-red-500">{errors.country}</small>}
                    </div>
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white p-3 rounded-lg mt-8 font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                    >
                     {isLoading ? "loading.." : "sign up"}
                    </button>
                  </form>
    
                  {/* Footer Links */}
                  <div className="text-center text-slate-500 mt-6">
                    Already have an account?
                    <Link to="/auth/login" className="font-medium text-indigo-600 hover:underline">
                      login
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>

    </>
  );
};

export default RegisterUser;



