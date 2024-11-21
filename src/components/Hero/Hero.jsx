import React, { useEffect, useState } from "react";
import "../Hero/Hero.css";

const Hero = () => {
 
  const names = ["MERN Stack", "Full Stack", "Frontend"];
 
    const [displayText, setDisplayText] = useState("");
    const [nameIndex, setNameIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

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
   <div className="relative">
     <div className="flex flex-col items-center gap-9">
      <img 
        className="mt-5"
        src="assets/profile.png"
        alt="Profile Image"
        style={{ height: "20%", width: "20%" }}
      />
      <div className="flex flex-col items-center" >
        <h1 className="text-6xl font-bold text-center w-[70%]  ">
          <span className="bg-gradient-to-r from-[#b923e1] to-[#da7c25] text-transparent bg-clip-text">
            I'm Muhammad Azeem,
          </span>{" "}
          {/* {displayText} */} Frontend
        </h1>
        <h1 className="text-6xl font-bold text-center py-6 w-[70%]  ">
          developer based in Pakistan.
        </h1>
        <p className="text-2xl w-[60%] text-center leading-relaxed">
          {/* As a dedicated MERN Stack Developer with a year of focused experience,
          I excel in crafting seamless, high-performance web applications. My
          expertise spans HTML, CSS, and advanced frameworks like Tailwind CSS,
          Material UI, and Bootstrap, React Bootstrap, alongside JavaScript,
          React JS, Node.js, Express.js, and Firebase. I am committed to
          delivering clean, efficient code that marries design with
          functionality, consistently bringing innovative ideas to life on the
          web. Currently, i am working on FIT computers as trainee Mern stack
          Developer. */}
          I am a Frontend developer from Islamabad, Pakistan with a year of experience in multiple companies like trainee at FIT Computers and WSM Solutions.
        </p>
      </div>
      <div className="btn gap-4">
        <div className="connect-btn hover:scale-105 duration-300 ">
          Connect With Me
        </div>
        <div className="resume-btn hover:scale-105 duration-300 hover:border-purple-600 ">
          My resume
        </div>
      </div>
    </div>
            <div className=" flex flex-col gap-y-5 absolute top-80 right-12 ">
              <i className="fab fa-facebook">
                
              </i>
              <strong>
                H
              </strong>
              <strong>
                H
              </strong>
              <strong>
                H
              </strong>
            </div>
   </div>
  );
};

export default Hero;
