import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const RegisterUser = () => {
  const [showPassword, setshowPassword] = useState(false);

  const togglePassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <>
       <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-[1200px] mx-auto bg-white rounded-[20px] shadow-2xl flex flex-col lg:flex-row items-center justify-evenly p-6 lg:p-10 gap-6">
        
        {/* Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/03/95/1f/03951f147a539df10e2fd35bc062403a.jpg"
            alt="Illustration"
            className="w-[300px] md:w-[400px] lg:w-[450px]"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4 flex justify-center">
            <img
              src="./src/images/frontend-removebg-preview(1).png"
              className="w-[150px]"
            />
          </div>

          <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Create an Account
          </h1>

          <form className="space-y-4">
            {/* Firstname */}
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full mt-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Lastname */}
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full mt-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {/* Submit */}
          <div className="flex justify-center items-center">
              <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 rounded-[30px] hover:bg-blue-700 transition duration-300 w-50"
            >
              Sign Up
            </button>
          </div>
          
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterUser;
