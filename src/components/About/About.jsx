import React from "react";
import '../About/About.css'

const About = () => {
  return (
    // about-section
    <div id="about" className=" flex flex-col justify-center items-center gap-8 sm:px-36  px-0 py-12">
      {/* Title of about section */}
      <div className="relative">
        <h1 className=" lg:text-6xl md:4xl sm:3xl text-4xl font-semibold px-10 ">About me</h1>
        <img 
          className="absolute bottom-0 right-0 -z-10 sm:w-40 w-24 mr-2 sm:mr-0 "
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* /// */}
      <div className="flex items-center sm:gap-14 gap-0 sm:pt-8 pt-3 sm:px-0 px-5">
        {/* left side of about section (image)  */}
        <div className="flex">
          <img
            src="assets/profile_img3.png"
            alt="profile photo"
            className="h-[75vh] w-[75vw] rounded-md hover:scale-105 duration-300 hover:border-purple-600 cursor-pointer sm:block hidden"
          />
        </div>
        {/* //// right side //// */}
        <div className="flex flex-col gap-12 ">
          {/* right side of about section (description)  */}
          <div className="flex flex-col text-sm sm:text-lg gap-2 text-gray-300 leading-relaxed  text-justify">
            <p>
              As a dedicated MERN Stack Developer with a year of focused
              experience, I excel in crafting seamless, high-performance web
              applications. My expertise spans HTML, CSS, and advanced
              frameworks like Tailwind CSS, Material UI, and Bootstrap, React
              Bootstrap, alongside JavaScript, React JS, Node.js, Express.js,
              and Firebase.
            </p>
            <p>
              I am committed to delivering clean, efficient code that marries
              design with functionality, consistently bringing innovative ideas
              to life on the web. Currently, i am working on FIT computers as
              trainee Mern stack Developer.
            </p>
          </div>
          {/* Skill section  */}
          <div className=" about-skills flex flex-col gap-6 text-sm sm:text-lg md:text-xl">
            <div className="grid grid-cols-12 items-center ">
              <strong className="col-span-4 ">HTML & CSS</strong>
             <div className=" w-[70%] h-fit col-span-8 dark:bg-white bg-black rounded-full "> <hr className="h-full w-[90%]" /></div>
            </div>
            <div className="grid grid-cols-12 items-center ">
              <strong className="col-span-3  ">Bootstrap</strong>
             <div className=" w-full h-fit col-span-9 dark:bg-white bg-black rounded-full "> <hr className="h-full w-[80%]" /></div>
            </div>
            <div className="grid grid-cols-12 items-center">
              <strong className="col-span-3  ">Tailwind CSS</strong>
             <div className=" w-full h-fit col-span-9 dark:bg-white bg-black rounded-full "> <hr className="h-full w-[90%]" /></div>
            </div>
            <div className="grid grid-cols-12 items-center">
              <strong className="col-span-3  ">JavaScript</strong>
             <div className=" w-full h-fit col-span-9 dark:bg-white bg-black rounded-full "> <hr className="h-full w-[50%]" /></div>
            </div>
            <div className="grid grid-cols-12 items-center">
              <strong className="col-span-3  ">React JS</strong>
             <div className=" w-full h-fit col-span-9 dark:bg-white bg-black rounded-full "> <hr className="h-full w-[60%]" /></div>
            </div>
            <div className="grid grid-cols-12 items-center">
              <strong className="col-span-3  ">Context API</strong>
             <div className=" w-full h-fit col-span-9 dark:bg-white bg-black rounded-full "> <hr className="h-full w-[50%]" /></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
