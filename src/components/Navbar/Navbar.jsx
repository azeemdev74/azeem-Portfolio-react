import React, { useContext, useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import ScrollContext from '../../Context/ScrollContext'


const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false)
  const [menu, setMenu] = useState("home")

  const {scrollToSection}=useContext(ScrollContext)
// useEffect(() => {
//   document.body.classList.toggle("dark");
 
//   // if (darkMode===false) {
   
//   //   document.documentElement.classList.remove('dark')
//   //  }else{
//   //   document.documentElement.classList.add('dark')
    
//   //  }

  
// }, [darkMode])
const [theme, setTheme] = useState(false);
  useEffect(() => {
    const setSystemTheme = () => {
      if (theme === "default") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("CovertableImages");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    setSystemTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", setSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", setSystemTheme);
    };
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "default") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

 

// const scrollToSection=(id)=>{
  
// const section= document.getElementById(id);
// console.log(section)
// if (section) {
//   section.scrollIntoView({behavior:'smooth'})
//   setMenu(id)

// }
// }

  return (
    <div className='flex justify-between items-center px-12 py-3 fixed mx-auto w-full dark:bg-[#161513] text-black dark:text-white bg-white z-10'>
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
      <div className=' text-2xl '>
       {theme==='light' ?<i onClick={()=>setTheme('dark')} className='fa fa-moon cursor-pointer'></i>:
       <i onClick={()=>setTheme('light')} className='fa fa-sun cursor-pointer'></i>}
        
        
      </div>
    </div>
  )
}

export default Navbar
