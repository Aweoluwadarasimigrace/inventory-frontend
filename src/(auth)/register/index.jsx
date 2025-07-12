import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router";

const RegisterUser = () => {
  const [showPassword, setshowPassword] = useState(false);
  const { changeFormDetails, submitForm, isLoading, countryValue } =
    useRegister();

  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <>
      <div className="bg-gray-100 h-100 py-16 px-4">
        <div className="max-w-[1200px] mx-auto bg-white rounded-[20px] shadow-2xl flex flex-col lg:flex-row items-center justify-evenly p-6 lg:p-10 gap-6">
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
            <div className="mb-4 flex justify-start">
              <img
                src="/frontend-removebg-preview (1).png"
                className="w-[200px]"
              />
            </div>

            <h1 className="text-xl md:text-3xl font-[700] mb-6">
              Create an Account
            </h1>

            <form className="space-y-4" onSubmit={submitForm}>
              {/* companyName */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  onChange={changeFormDetails}
                  className="w-full mt-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={changeFormDetails}
                  name="email"
                  className="w-full mt-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* contact */}
             <div>
  <label
    htmlFor="contact"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Phone Number
  </label>

  <div className="flex gap-2">
    {/* Country Code Dropdown */}
    <select
      name="countryCode"
      onChange={changeFormDetails}
      className="w-[100px] px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">+Code</option>
      {countryValue.map((country, i) => (
        <option key={i} value={country.phoneCode}>
          {country.phoneCode}
        </option>
      ))}
    </select>

    {/* Phone Number Input */}
    <input
      type="text"
      name="number"
      onChange={changeFormDetails}
      className="flex-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Phone number"
    />
  </div>
</div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={changeFormDetails}
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

              {/* country */}
             <div>
  <label
    htmlFor="country"
    className="block text-sm font-medium text-gray-700"
  >
    Select your country
  </label>
  <select
    name="country"
    className="w-full mt-1 px-4 py-2 bg-gray-200 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-400"
    onChange={changeFormDetails}
  >
    <option value="">-- Select a country --</option>
    {countryValue.map((country, i) => (
      <option value={country.name} key={i}>
        {country.name}
      </option>
    ))}
  </select>
</div>


              {/* Submit */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="mt-4 bg-[#017CFF] text-white py-2 rounded-[30px] hover:bg-blue-700 transition duration-300 w-50"
                >
                  {isLoading ? "loading..." : "Register"}
                </button>
              </div>
              <div className="flex items-center justify-center underline gap-2">
                <p>Aleady have an Account?</p>
                <Link to={"/auth/login"} className="text-red-400">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
