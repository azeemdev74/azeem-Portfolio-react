import React from "react";
import '../About/About.css'

const About = () => {
  return (
    // about-section
    <div className=" flex flex-col justify-center items-center gap-8 mx-36 my-24 ">
      {/* Title of about section */}
      <div className="relative">
        <h1 className="text-6xl font-semibold px-8">About me</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 w-40"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* /// */}
      <div className="flex gap-14 pt-8">
        {/* left side of about section  */}
        <div className="flex">
          <img
            src="assets/profile_img3.png"
            alt="profile photo"
            className="w-auto rounded-md hover:scale-105 duration-300 hover:border-purple-600 cursor-pointer"
          />
        </div>
        {/* //// right side //// */}
        <div className="flex flex-col gap-14">
          {/* right side of about section  */}
          <div className="flex flex-col text-xl gap-4 text-gray-300 ">
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
          <div className=" about-skills flex flex-col gap-5 text-xl">
            <div>
              <strong>HTML & CSS</strong>
              <hr style={{ width: "70%" }} />
            </div>
            <div>
              <strong>Bootstrap</strong>
              <hr style={{ width: "75%" }} />
            </div>
            <div>
              <strong>Material UI</strong>
              <hr style={{ width: "78%" }} />
            </div>
            <div>
              <strong>Tailwind CSS</strong>
              <hr style={{ width: "80%" }} />
            </div>
            <div>
              <strong>Java Script</strong>
              <hr style={{ width: "60%" }} />
            </div>
            <div>
              <strong>React JS</strong>
              <hr style={{ width: "70%" }} />
            </div>
            <div>
              <strong>Axios</strong>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
