import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
     <Link to={"/"} >HomePage </Link>
    <Link to={"/signup"} >SignUp </Link>
    <Link to={"/login"} >Login </Link>
    <Link to={"/notes"} >Notes </Link>
    </>
  )
}

export default Navbar




