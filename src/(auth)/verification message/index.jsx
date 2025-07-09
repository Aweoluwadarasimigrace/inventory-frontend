import React from 'react'
import { useRegister } from '../hooks/useRegister'

const VerficationMessage = () => {
  const {resendEmail, formData, Message,isloading} = useRegister()
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-4">
          A verification email has been sent to{" "}
          <span className="font-medium text-blue-700">{formData.email}</span>. <br />
          Didn’t receive it? You can resend the email below.
        </p>

        {Message && (
          <div
            className={"mb-4 p-3 rounded text-sm bg-red-100 text-red-700"}
          >
            {Message.message}
          </div>
        )}

        <button
          onClick={resendEmail}
          disabled={isloading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isloading ? "Resending..." : "Resend Verification Email"}
        </button>
      </div>
    </div>
    </div>
  )
}

export default VerficationMessage