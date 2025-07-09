// import React from 'react'
// import { useVerifyEmail } from '../hooks/useVerifyEmail'

// const VerifyEmail = () => {
//   const {status} = useVerifyEmail()
//   return (
//     <div>
//        <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow text-center">
//         {status === "loading" && <p>Verifying your email...</p>}
//         {status === "success" && <p className="text-green-600 font-semibold">✅ Your email has been verified!</p>}
//         {status === "error" && <p className="text-red-600 font-semibold">❌ Invalid or expired token.</p>}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default VerifyEmail