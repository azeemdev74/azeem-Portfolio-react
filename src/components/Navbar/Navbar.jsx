import React from 'react'
import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="assets/logo.png" alt="website-logo" style={{height:'10%', width:'10%'}} />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect ">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar
