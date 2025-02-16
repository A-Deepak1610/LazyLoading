import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate =useNavigate();
  return (
    <div>
      <ul>
        <li onClick={()=>{navigate('/LazyLoading/home')}}>Home</li>
        <li onClick={()=>{navigate('/LazyLoading/mainpage')}}>Main Page</li>
        <li onClick={()=>{navigate('/LazyLoading/contact')}}>Contact</li>
        <li onClick={()=>{navigate('/LazyLoading/about')}}>About</li>
      </ul>
    </div>
  )
}

export default Navbar