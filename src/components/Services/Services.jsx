import React from 'react'
import './Services.css'
import serviceData from './Service_data'

const Services = () => {

  return (
    <div id='service' className='services flex flex-col justify-center items-center gap-8 sm:px-36  px-0 py-12'>
     {/* // title of services section// */}

     <div className="relative">
        <h1 className="lg:text-6xl md:4xl sm:3xl text-4xl font-semibold px-10">My Services</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 sm:w-40 w-24 mr-2 sm:mr-0"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
     <div className="service-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 pt-10 px-4 sm:px-6 lg:mx-36 mb-20 ">
     {serviceData.map((val,index)=>{
        return <div key={index} className="service-data flex flex-col justify-center border-2 border-solid rounded-2xl p-8 gap-2  ">
            <h1 className='text-xl sm:text-2xl font-bold'>{`0${index+1}`}</h1>
            <h2 className='text-2xl font-semibold bg-gradient-to-r from-[#b923e1] to-[#da7c25] text-transparent bg-clip-text'>{val.s_name}</h2>
            <p className='text-gray-200 leading-8 max-w-xs'>{val.s_desc}</p>
            <div className="readmore-btn flex items-center gap-3 mt-5 cursor-pointer">
              <h1 className='text-base max-w-72 font-light '>Read More</h1>
              <img src="assets/arrow_icon.svg" alt="arrow-icon" className='w-5' />
            </div>
        </div>
      })}
     </div>
    </div>
  )
}

export default Services
