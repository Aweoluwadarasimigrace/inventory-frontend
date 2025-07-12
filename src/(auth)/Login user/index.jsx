import React, { useState } from "react";
import { useLoginUser } from "../hooks/useLoginUser";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  const { handleChangeForm, handleLogin, isLoading } = useLoginUser();
  const [showPassword, setshowPassword] = useState(false);
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  return (
   <div className="bg-gray-100 min-h-screen py-10 px-4">
  <div className="h-auto md:h-[80vh] md:flex md:items-center md:justify-center">
    <div className="w-full my-auto  max-w-[1100px] bg-white rounded-[20px] shadow-2xl flex flex-col lg:flex-row items-center justify-evenly p-6 gap-6">
      
      {/* Illustration */}
      <div className="flex md:w-1/2 justify-center">
        <img
          src="https://i.pinimg.com/736x/03/95/1f/03951f147a539df10e2fd35bc062403a.jpg"
          alt="Illustration"
          className="w-[300px] md:w-[400px] lg:w-[450px]"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <div className="mb-4 flex justify-center md:justify-start">
          <img
            src="/frontend-removebg-preview (1).png"
            className="w-[150px]"
            alt="Logo"
          />
        </div>

        <h1 className="text-xl md:text-3xl font-[700] mb-6 text-center md:text-left">
          Login
        </h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              onChange={handleChangeForm}
              name="email"
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
                name="password"
                onChange={handleChangeForm}
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
              className="mt-4 bg-[#017CFF] text-white py-1 px-10 rounded-[20px] hover:bg-blue-700 transition duration-300"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </div>
           <div className="flex items-center justify-center underline gap-2">
                          <p>Don't have an Account?</p>
                          <Link to={"/auth"} className="text-red-500">Register</Link>
                        </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
