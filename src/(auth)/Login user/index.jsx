import React, { useState } from "react";
import { useLoginUser } from "../hooks/useLoginUser";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  const { handleChangeForm, handleLogin, isLoading, errors } = useLoginUser();
  const [showPassword, setshowPassword] = useState(false);
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  return (
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
                <Link to="/auth">
                  <button className="bg-purple-500 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-colors" type="button"> 
                    Register
                  </button>
                </Link>
              </header>
      
              {/* MAIN CONTENT: Centers the form both vertically and horizontally */}
              <main className="flex flex-grow items-center justify-center p-4">
                <div className="relative w-full max-w-xl bg-white shadow-2xl rounded-2xl">
      
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <span className="mb-3 text-3xl md:text-4xl font-bold text-slate-800">welcome Back!</span>
                    <span className="font-light text-slate-500 mb-8">
                      Track. Manage. Grow.
                    </span>
      
                    {/* FORM: All original functions and names are preserved */}
                    <form onSubmit={handleLogin}>
                          {/* Email */}
                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          name='email'
                          onChange={handleChangeForm}
                          placeholder="your.email@example.com"
                          className="w-full mb-2 p-3 border border-slate-300 rounded-lg placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        {errors.email && <small className="text-red-500">{errors.email}</small>}
                      </div>
      
                     
                         
      
                      {/* Password */}
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-700">Password</label>
                        <div className='relative'>
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={handleChangeForm}
                            placeholder="Create a strong password"
                            className="w-full mb-2 p-3 border border-slate-300 rounded-lg placeholder:font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                          <button type="button" onClick={togglePassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                          </button>
                        </div>
                        {errors.password && <small className="text-red-500">{errors.password}</small>}
                      </div>
      
      
                    
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-purple-600 text-white p-3 rounded-lg mt-8 font-semibold text-lg transition-all duration-300"
                      >
                       {isLoading ? "loading.." : "sign up"}
                      </button>
                    </form>
      
                    {/* Footer Links */}
                    <div className="text-center text-slate-500 mt-6">
                     Don't have an account?
                      <Link to="/auth" className="font-medium text-indigo-600 hover:underline">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>

  );
};

export default Login;
