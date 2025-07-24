
import React, { useState } from 'react'
import { Link } from 'react-router'


const HomePage = () => {
 
  return(
   <>
    <Link to={"/dashboard"}>dashboards</Link>
    <Link to={"/profile"}>profile page</Link>
   </>
  )
}

export default HomePage