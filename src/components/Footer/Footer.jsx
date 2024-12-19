import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer px-12  '>
      {/* // footer top section // */}
      <div className='footer-top px-3  flex items-center justify-between'>
        {/* // website logo // */}
       <img src="assets/logo.svg" alt="Website-logo" className='w-20 sm:w-24'/> 
       {/* // Social icons // */}
      <div className="Social-icons flex sm:gap-7 gap-4 ">
        <strong className="fab fa-linkedin"></strong>
        <strong className="	fas fa-envelope"></strong>
        <strong className="fab fa-github "></strong>
        <strong className="fab fa-facebook hover:text-blue-500"></strong>
      </div>
      </div>
      {/* // footer bottom section // */}
      <hr />
      <div className='footer-bottom py-8 grid sm:flex items-center sm:justify-between justify-center sm:text-xl text-base font-normal '>
      <small>© 2024 M Azeem. All rights reserved. </small>
      <div className='flex gap-7 text-base'>
      <small>Term of Services</small>
      <small>Privacy Policy</small>
      <small>Connect with me</small>
      </div>

  

      </div>


    </div>
  )
}

export default Footer
