import React, { useState } from 'react'
import  '../Contact/Contact.css'
import { toast } from 'react-toastify';

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
    const [loading, setLoading] = useState(false); 
    const onSubmit = async (event) => {
      event.preventDefault();
      setLoading(true)
      const formData = new FormData(event.target);
  
      formData.append("access_key", "50435694-baf3-4969-b6c6-49aac3f67aa7");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      try{
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
        // window.alert(res.message)
        event.target.reset(); 
        toast(res.message,{
          position: 'bottom-right',
          closeButton: true,
          theme: 'dark',
          type: 'success'
        })
      } else {
        console.error("Error:", res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Stop loading
    }
    };
  return (
    <div id='contact' className='contact-section flex flex-col justify-center items-center gap-8 sm:px-36 px-0 sm;py-12 py-4 '>
        {/* // heading of contact section // */}

      <div className="relative">
        <h1 className="lg:text-6xl md:4xl sm:3xl text-4xl font-semibold px-10">Get In Touch</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 sm:w-40 w-24 mr-2 sm:mr-0"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* data of contact section  */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 px-4 sm:px-8 lg:mx-36 py-10'>
        {/* // left side of contact us section // */}
        <div className="contact-left flex flex-col gap-6 md:gap-8">
            <h6 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Let's Talk</h6>
            <small className='text-base sm:text-lg leading-6 sm:leading-8 max-w-full md:max-w-lg text-gray-300 '>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</small>
           {
            details.map((val)=>
                <div className='flex gap-4 items-center'>
                <img className='sm:w-6 w-5' src={val.d_icon} alt="icons-name" />
                <span className='text-sm sm:text-base text-gray-400'>{val.d_title}</span>
            </div>
            )
           }
        </div>

        {/* Contact section right side */}

        <div className="contact-right  px-5 sm:px-0">
          <form className='contact-form flex flex-col justify-center items-start gap-4 sm:gap-6' onSubmit={onSubmit}>
            <label className='text-sm sm:text-base ' >Your name</label>
            <input className='w-full py-3 sm:p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' name='Name' type="text" placeholder='Enter your name' required/>
            <label  className='text-sm sm:text-base '>Your Email</label>
            <input className='w-full p-3 sm:p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' name='Email' type="email" placeholder='Enter your mail' required/>
            <label className='text-sm sm:text-base ' >Write your message here</label>
            <textarea className='w-full p-4 text-base sm:text-lg border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' name="Message" rows='8' placeholder='Enter your message' required>
            </textarea>
            <button type='submit' disabled={loading} className='text-lg px-6 py-3 mt-4 cursor-pointer rounded-full'>
             {
              loading ? 'Submitting...': ' Submit Now'
             }
            </button>
            
          </form>
          
        </div>

    </div>
    </div>
  )
}

export default Contact

