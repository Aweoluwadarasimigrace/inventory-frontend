import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div>
        <Link to={"/auth"}>register page</Link>
        <Link to={"/auth/verify-email/4556"}>verify</Link>
    </div>
  )
}

export default HomePage