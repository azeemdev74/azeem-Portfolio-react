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
      <div className="flex flex-col items-center gap-3">
        <img
          className="mt-5"
          src="assets/profile.png"
          alt="Profile Image"
          style={{ height: "20%", width: "20%" }}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-center w-[70%]  ">
            <span className="bg-gradient-to-r from-[#b923e1] to-[#da7c25] text-transparent bg-clip-text">
              I'm Muhammad Azeem,
            </span>{" "}
            {/* {displayText}   */} Frontend
          </h1>
          <h1 className="text-6xl font-bold text-center py-3 w-[70%]  ">
            developer based in Pakistan.
          </h1>
          <p className="text-2xl w-[60%] text-center leading-relaxed text-gray-300">
            I am a Frontend developer from Islamabad, Pakistan with a year of
            experience in multiple companies like trainee at FIT Computers and
            WSM Solutions.
          </p>
        </div>
        <div className="btn gap-6 pt-4 flex justify-center items-center">
          <div className="connect-btn hover:scale-105 duration-300 ">
            Get In Touch
          </div>
          <div className="resume-btn hover:scale-105 duration-300 hover:border-purple-600 ">
            My resume
          </div>
        </div>
      </div>
      {/* // Social icons // */}
      <div className="Social-icons flex flex-col gap-y-8 absolute top-96 right-12  ">
        <strong className="fab fa-linkedin"></strong>
        <strong className="	fas fa-envelope"></strong>
        <strong className="fab fa-github "></strong>
        <strong className="fab fa-facebook"></strong>
      </div>
    </div>
  );
};

export default Hero;
