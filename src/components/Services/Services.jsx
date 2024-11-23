import React from 'react'
import './Services.css'
import serviceData from './Service_data'

const Services = () => {

  return (
    <div className='services flex flex-col justify-center items-center'>
     {/* // title of services section// */}

     <div className="relative">
        <h1 className="text-6xl font-semibold px-8">My Services</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-40"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
     <div className="service-container grid grid-cols-3 gap-12 pt-20 mx-36 mb-20 ">
     {serviceData.map((val,index)=>{
        return <div key={index} className="service-data flex flex-col justify-center border-2 border-solid rounded-2xl p-8 gap-2  ">
            <h1 className='text-2xl font-bold'>{`0${index+1}`}</h1>
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
