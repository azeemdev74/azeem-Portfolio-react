import React from 'react'


const Navbar = () => {
  return (
    <div className=''>
      <img src="assets/theme_pattern.svg" alt="website-logo" />
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
