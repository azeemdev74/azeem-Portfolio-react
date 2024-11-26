import React from 'react'
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
    ]
  return (
    <div className='contact-section flex flex-col justify-center items-center gap-20 mx-44 my-20'>
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
    <div className='flex gap-40 '>
        {/* // left side of contact us section // */}
        <div className="contact-left flex flex-col gap-8">
            <h6 className='text-[35px] font-bold '>Let's Talk</h6>
            <small>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</small>
           {
            details.map((val)=>
                <div className='flex gap-1 items-center'>
                <img className='w-5' src={val.d_icon} alt="icons-name" />
                <span>{val.d_title}</span>
            </div>
            )
           }
        </div>

        {/* Conatct section right side */}

        <div className="contact-right flex flex-col justify-center items-center">
          <form >
            <label >Your name</label>
            <input type="text" placeholder='Enter your name'/>
            <label >Your Email</label>
            <input type="text" placeholder='Enter your mail'/>
            <label >Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'>
            </textarea>
            <button type='submit'>
              Submit now
            </button>
            
          </form>
        </div>

    </div>
    </div>
  )
}

export default Contact
