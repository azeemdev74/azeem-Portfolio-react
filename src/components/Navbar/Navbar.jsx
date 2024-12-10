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
const [theme, setTheme] = useState('dark');
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
    }},[theme]);

 

// const scrollToSection=(id)=>{
  
// const section= document.getElementById(id);
// console.log(section)
// if (section) {
//   section.scrollIntoView({behavior:'smooth'})
//   setMenu(id)

// }
// }

  return (
    <div className='flex  justify-between items-center px-12 py-3 fixed  mx-auto w-full dark:bg-[#161513] text-black dark:text-white bg-white z-10'>
       {/* <div className="relative">
        <h1 className="text-4xl font-semibold px-8">Azeem</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-20"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div> */}
            <img src={theme==='dark'?"assets/logo.svg":'assets/dark_logo.svg'} alt="website-logo" className=' sm:w-[15%] lg:w-[8%] md:[25%] ' />
      <ul className='nav-menu md:flex hidden'>
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
      {/* <div onClick={()=>{{scrollToSection('contact')
        setMenu('contact')
      }}} className="nav-connect text-white">
        Connect With Me
      </div> */}
      <div className=' text-2xl flex gap-x-3 items-center'>
       {theme==='light' ?<i onClick={()=>setTheme('dark')} className='fa fa-moon cursor-pointer'></i>:
       <i onClick={()=>setTheme('light')} className='fa fa-sun cursor-pointer'></i>}
      
        <div class="dropdown cursor-pointer md:hidden inline-block ">
  <span><i className="fa fa-bars">

</i></span>
  <div class="dropdown-content dark:border-2 dark:border-gray-700 text-black dark:text-white">
   <ul className='text-base flex flex-col  '>
    <li onClick={()=>{scrollToSection('home')}} className='hover:bg-gray-700 py-1 px-4'>Home</li>
    <li onClick={()=>{scrollToSection('about')}} className='hover:bg-gray-700 py-1 px-4'>About me</li>
    <li onClick={()=>{scrollToSection('service')}} className='hover:bg-gray-700 py-1 px-4'>Services</li>
    <li onClick={()=>{scrollToSection('portfolio')}} className='hover:bg-gray-700 py-1 px-4'>Portfolio</li>
    <li onClick={()=>{scrollToSection('contact')}} className='hover:bg-gray-700 py-1 px-4'>Contact</li>
   </ul>
  </div>
</div>
      </div>
    </div>
  )
}

export default Navbar
