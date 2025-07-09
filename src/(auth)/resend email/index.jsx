import React from "react";
import { useResendEmail } from "../hooks/useResendEmail";

const ResendEmailForm = () => {
  const { resendEmail, emailRef, isLoading } = useResendEmail();
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
        <form
          onSubmit={resendEmail}
          className="bg-white p-4 rounded shadow-md max-w-md w-full"
        >
          <h2 className="tetx-xl font-bold mb-5 tetx-center">
            Resend Verification Email
          </h2>
          <input
            type="email"
            ref={emailRef}
            className="p-2 w-full rounded mb-4"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            {isLoading ? "Resending..." : "Resend Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResendEmailForm;
