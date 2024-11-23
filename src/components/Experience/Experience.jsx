import React from "react";
import "../Experience/Experience.css";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mx-36 my-10">
      {/* // My experience section heading // */}
      <div className="relative">
        <h1 className="text-6xl font-semibold px-8">My latest work</h1>
        <img
          className="absolute bottom-0 right-0 top-3 -z-10 w-40"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* // Project cards //  */}
      <div className="project-card flex justify-center gap-3">
        <div className="border-2 border-red-500">
          <img src="assets/project_1.svg" alt="" />
          {/* // details part of card // */}
          <div>
            <h1 className="text-2xl font-bold pt-8 px-3">Project Title</h1>
            <p className="pt-3 px-3">Project descriptions....</p>
            {/* // language use section /// */}
            <div className="lng-section flex gap-8 justify-center items-center py-8">
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
            </div>
            {/* // github link // */}
            <div className="flex items-center gap-2">
              <i className="fab fa-github"></i>
              <span>View On Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
