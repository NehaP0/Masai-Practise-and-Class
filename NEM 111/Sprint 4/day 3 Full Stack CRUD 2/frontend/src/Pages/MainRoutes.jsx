import React from 'react'
import {Routes, Route} from "react-router-dom"
import Signup from '../components/Signup';
import Login from '../components/Login';
import Notes from '../components/Notes';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
    </Routes>
  )
}

export default MainRoutes