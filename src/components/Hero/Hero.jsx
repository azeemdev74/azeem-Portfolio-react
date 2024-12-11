import React, { useContext, useEffect, useState } from "react";
import "../Hero/Hero.css";
import ScrollContext from "../../Context/ScrollContext";

const Hero = () => {
  const names = ["MERN Stack", "Full Stack", "Frontend"];

  const [displayText, setDisplayText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const {scrollToSection}=useContext(ScrollContext)


  

  useEffect(() => {
    const animateText = () => {
      const currentName = names[nameIndex];

      if (!isDeleting && displayText === currentName) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
      } else {
        const nextChar = isDeleting
          ? currentName.substring(0, displayText.length - 1)
          : currentName.substring(0, displayText.length + 1);

        setDisplayText(nextChar);
      }
    };

    const timeoutId = setTimeout(animateText, isDeleting ? 50 : 150);

    return () => clearTimeout(timeoutId);
  }, [displayText, nameIndex, isDeleting]);

  return (
    <div id="home" className="relative ">
      <div className="flex flex-col items-center gap-3 pt-20">
        <img
          className="mt-5 sm:w-[20%] w-[40%]  "
          src="assets/profile.png"
          alt="Profile Image"
        
        />
        <div className="flex flex-col items-center">
          <h1 className=" flex justify-center flex-col sm:flex-row gap-x-2 lg:text-5xl md:text-3xl text-3xl font-bold text-center w-[95%] dark:text-white text-black  ">
            <span className="bg-gradient-to-r from-[#b923e1] to-[#da7c25] text-transparent bg-clip-text">
              I'm Muhammad  Azeem,
            </span> {" "} 
            <span className="sm:block hidden "> {displayText} </span>
            
          </h1>
          <h1 className="sm:hidden block h-[8vh] lg:text-5xl md:text-3xl text-3xl font-bold text-center w-[95%] dark:text-white text-black tracking-wider ">
         {displayText}
          </h1>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center py-2 sm:py-3 w-[90%] dark:text-white text-black ">
            developer based in Pakistan.
          </h1>
          <p className="lg:text-xl md:text-base text-sm  sm:w-[60%] w-[90%] text-center pt-4 sm:pt-0 leading-relaxed dark:text-gray-300 text-black">
            I am a Frontend developer from Islamabad, Pakistan with a year of
            experience in multiple companies like trainee at FIT Computers and
            WSM Solutions.
          </p>
        </div>
        <div className="btn gap-6 pt-10 sm:pt-6 flex justify-center items-center">
          <div onClick={()=>{scrollToSection('contact')}} className="connect-btn sm:px-7 px-5 py-3 sm:text-base text-xs hover:scale-105 duration-300 ">
            Get In Touch
          </div>
          <div className="resume-btn sm:px-7 px-5 py-3 sm:text-base text-xs hover:scale-105 duration-300 hover:border-purple-600 dark:border-white  border-black rounded-full border-solid border-[2px] text-black dark:text-white">
            My resume
          </div>
        </div>
      </div>
      {/* // Social icons // */}
      <div className="Social-icons hidden md:flex flex-col gap-y-8 absolute top-96 right-12 text-black dark:text-white ">
        <strong className="fab fa-linkedin"></strong>
        <strong className="	fas fa-envelope"></strong>
        <strong className="fab fa-github "></strong>
        <strong className="fab fa-facebook"></strong>
      </div>
     
    </div>
  );
};

export default Hero;
