import React from 'react'
import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 pt-3'>
       <div className="relative">
        <h1 className="text-4xl font-semibold px-8">Azeem</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-20"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* <img src="assets/logo.png" alt="website-logo" style={{height:'7%', width:'8%'}} /> */}
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
