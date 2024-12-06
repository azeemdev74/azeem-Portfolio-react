import React, { useState } from 'react'
import '../Navbar/Navbar.css'


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className='flex justify-between items-center px-12 pt-3'>
       {/* <div className="relative">
        <h1 className="text-4xl font-semibold px-8">Azeem</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-20"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div> */}
      <img src="assets/logo.svg" alt="website-logo" style={{height:'7%', width:'8%'}} />
      <ul className='nav-menu'>
        <li onClick={()=>setMenu('home')} className='cursor-pointer flex flex-col'>Home{menu==='home'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>setMenu('about')} className='cursor-pointer flex flex-col'>About me {menu==='about'?<img className='flex m-auto'  src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>setMenu('service')} className='cursor-pointer flex flex-col'>Services{menu==='service'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>setMenu('portfolio')} className='cursor-pointer flex flex-col'>Portfolio{menu==='portfolio'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>setMenu('contact')} className='cursor-pointer flex flex-col'>Contact{menu==='contact'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
      </ul>
      <div className="nav-connect ">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar
