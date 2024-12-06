import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer px-12 '>
      {/* // footer top section // */}
      <div className='footer-top px-3  flex items-center justify-between'>
        {/* // website logo // */}
       <img src="assets/logo.svg" alt="Website-logo" /> 
       {/* // Social icons // */}
      <div className="Social-icons flex gap-7 ">
        <strong className="fab fa-linkedin"></strong>
        <strong className="	fas fa-envelope"></strong>
        <strong className="fab fa-github "></strong>
        <strong className="fab fa-facebook"></strong>
      </div>
      </div>
      {/* // footer bottom section // */}
      <hr />
      <div className='footer-bottom pt-8 flex items-center justify-between text-xl font-normal '>
      <small>© 2024 Muhammad Azeem. All rights reserved. </small>
      <div className='flex gap-7'>
      <small>Term of Services</small>
      <small>Privacy Policy</small>
      <small>Connect with me</small>
      </div>

  

      </div>


    </div>
  )
}

export default Footer
