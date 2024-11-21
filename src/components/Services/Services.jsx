import React from 'react'
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
     <div className="service-container flex gap-6 pt-12 ">
     {serviceData.map((val,index)=>{
        return <div key={index} className="flex flex-col justify-center border-2 border-solid rounded p-7 gap-2 cursor-pointer ">
            <h1 className='text-2xl font-bold'>{`0${index+1}`}</h1>
            <h2>{val.s_name}</h2>
            <p>{val.s_desc}</p>
        </div>
      })}
     </div>
    </div>
  )
}

export default Services
