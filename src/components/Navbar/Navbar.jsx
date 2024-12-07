import React, { useContext, useState } from 'react'
import '../Navbar/Navbar.css'
import ScrollContext from '../../Context/ScrollContext'


const Navbar = () => {
  const [menu, setMenu] = useState("home")

  const {scrollToSection}=useContext(ScrollContext)

// const scrollToSection=(id)=>{
  
// const section= document.getElementById(id);
// console.log(section)
// if (section) {
//   section.scrollIntoView({behavior:'smooth'})
//   setMenu(id)

// }
// }

  return (
    <div className='flex justify-between items-center px-12 py-3 fixed mx-auto w-full bg-[#161513] z-10'>
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
        <li onClick={()=>{scrollToSection('home')
          setMenu('home')
        }} className='cursor-pointer flex flex-col'>Home{menu==='home'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>{scrollToSection('about')
          setMenu('about')
        }} className='cursor-pointer flex flex-col'>About me {menu==='about'?<img className='flex m-auto'  src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>{scrollToSection('service')
          setMenu('service')
        }} className='cursor-pointer flex flex-col'>Services{menu==='service'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>{scrollToSection('portfolio')
          setMenu('portfolio')
        }} className='cursor-pointer flex flex-col'>Portfolio{menu==='portfolio'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
        <li onClick={()=>{scrollToSection('contact')
          setMenu('contact')
        }} className='cursor-pointer flex flex-col'>Contact{menu==='contact'?<img className='flex m-auto' src='assets/nav_underline.svg' alt='underline' />:<></>}</li>
      </ul>
      <div onClick={()=>{{scrollToSection('contact')
        setMenu('contact')
      }}} className="nav-connect ">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar
