import React from 'react'
import ProfilePage from './Profile'
import { Navigate,Outlet } from 'react-router-dom';

const Privateroute = () => {
   const islogedin=localStorage.getItem("isloggedin");
  return (
    islogedin ? <Outlet /> : <Navigate to="/login" />
    
  )
}

export default Privateroute
