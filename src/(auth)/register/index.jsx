import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router";

const RegisterUser = () => {
  const [showPassword, setshowPassword] = useState(false);
  const { changeFormDetails, submitForm, isLoading, countryValue, errors } =
    useRegister();
  const [selectedcode, setselectedcode] = useState();
  const [isOpen, setisOpen] = useState(false);
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  // url https://www.zoho.com/inventory/signup/images/signup-slide-one@1x.png
  return (
    <>
      <div className="bg-white xl:h-full py-2 px-4 min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-between p-6 lg:p-4 gap-6 w-full">
          {/* Illustration */}
          <div className="hide-below-1170 bg-[#f9c63f] h-[100vh] w-[400px] rounded-[13px] bg-[url('https://www.zoho.com/inventory/signup/images/signup-slide-one@1x.png')] bg-cover bg-no-repeat p-6 text-white font-semibold leading-tight">
            With Zoho Inventory, you can actually organize your business.
          </div>

          {/* Form Section */}
          <div className=" w-full max-w-[700px] xl:w-2/5 ">
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
                  className="block text-[15px] mb-2 font-medium text-gray-700"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  onChange={changeFormDetails}
                  className="w-full mt-1 px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                {errors.name && (
                  <small style={{ color: "red" }}>{errors.name}</small>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[15px] mb-2 font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={changeFormDetails}
                  name="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                {errors.email && (
                  <small style={{ color: "red" }}>{errors.email}</small>
                )}
              </div>

              {/* contact */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-[15px] mb-2 font-medium text-gray-700 mb-1"
                >
                  Phone Number:
                </label>

               <div className="flex gap-2 relative">
  {/* Country Code Dropdown */}
  <div className="relative w-[100px]">
    <div
      className="px-4 py-2 border border-gray-400 rounded cursor-pointer bg-white"
      onClick={() => setisOpen(!isOpen)}
    >
      {selectedcode || "Code"}
    </div>

    {isOpen && (
      <div className="absolute z-10 mt-1 w-100 border border-gray-300 bg-white rounded shadow-md">
        {countryValue.map((country, i) => (
          <div
            key={i}
            onClick={() => {
              setselectedcode(country.phoneCode);
              setisOpen(false); // close dropdown
               changeFormDetails({
    target: {
      name: "countrycode",
      value: country.phoneCode,
    },
  })
            }}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {country.name} ({country.phoneCode})
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Phone Number Input */}
  <input
    type="text"
    name="number"
    onChange={changeFormDetails}
    className="flex-1 px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
    placeholder="Phone number"
  />
</div>

                {/* error handler */}
                {errors.number && (
                  <small style={{ color: "red" }}>{errors.number}</small>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-[15px] mb-2 font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={changeFormDetails}
                    className="w-full px-4 py-2 border-gray-400 border focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                  {errors.password && (
                    <small style={{ color: "red" }}>{errors.password}</small>
                  )}
                </div>
              </div>

              {/* country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-[15px] mb-2 font-medium text-gray-700"
                >
                  Select your country
                </label>
                <select
                  name="country"
                  className="w-full mt-1 px-4 py-2 border-gray-400 border focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onChange={changeFormDetails}
                >
                  {countryValue.map((country, i) => (
                    <option value={country.name} key={i}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <small style={{ color: "red" }}>{errors.country}</small>
                )}
              </div>

              {/* Submit */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="mt-4 bg-[#696969] text-white py-2 rounded hover:bg-blue-700 transition duration-300 w-50"
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
