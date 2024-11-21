import React from "react";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-9">
      <img
        src="assets/profile.png"
        alt="Profile Image"
        style={{ height: "20%", width: "20%" }}
      />
      <div>
        <h1 className="text-6xl font-bold text-center   ">
          <span className="bg-gradient-to-r from-[#b923e1] to-[#da7c25] text-transparent bg-clip-text">
            I'm Muhammad Azeem,
          </span>{" "}
          MERN Stack
        </h1>
        <h1 className="text-6xl font-bold text-center ">
          developer based in Pakistan.
        </h1>
        <p>
          I am a Mern Stack developer from Islamabad, with 6 months of
          experience in multiple companies like FIT computers and Morosoft Labs.
        </p>
      </div>
      <div className="btn gap-4">
        <div className="connect-btn ">Connect With Me</div>
        <div className="resume-btn ">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
