import React, { useState } from 'react'
import  '../Contact/Contact.css'

const Contact = () => {
    const details=[
        {
            d_icon:'assets/mail_icon.svg',
            d_title:'azeemrauf7474@gmail.com'

        },
        {
            d_icon:'assets/call_icon.svg',
            d_title:'+92-303-7533267'

        },
        {
            d_icon:'assets/location_icon.svg',
            d_title:'Islamabad,PK'

        },
    ];
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "50435694-baf3-4969-b6c6-49aac3f67aa7");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };
  return (
    <div id='contact' className='contact-section flex flex-col justify-center items-center gap-20 mx-44 my-20'>
        {/* // heading of contact section // */}

      <div className="relative">
        <h1 className="text-6xl font-semibold px-8">Get In Touch</h1>
        <img
          className="absolute bottom-0 right-0 top-3 -z-10 w-40"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* data of contact section  */}
    <div className='flex gap-80 '>
        {/* // left side of contact us section // */}
        <div className="contact-left flex flex-col gap-7">
            <h6 className='text-5xl font-bold '>Let's Talk</h6>
            <small className='text-lg leading-[30px] max-w-lg text-gray-300 '>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</small>
           {
            details.map((val)=>
                <div className='flex gap-4 items-center'>
                <img className='w-6' src={val.d_icon} alt="icons-name" />
                <span className='text-sm'>{val.d_title}</span>
            </div>
            )
           }
        </div>

        {/* Contact section right side */}

        <div className="contact-right flex flex-col justify-center items-start">
          <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input name='Name' type="text" placeholder='Enter your name'required/>
            <label >Your Email</label>
            <input name='Email' type="email" placeholder='Enter your mail'required/>
            <label >Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message' required>
            </textarea>
            <button type='submit' className='text-lg px-6 py-3 mt-4 cursor-pointer rounded-full'>
              Submit Now
            </button>
          </form>
            
        </div>

    </div>
    </div>
  )
}

export default Contact
