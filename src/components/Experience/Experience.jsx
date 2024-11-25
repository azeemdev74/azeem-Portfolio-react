import React from "react";
import "../Experience/Experience.css";
import mywork_data from "./mywork_data";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mx-36 my-7">
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
      <div className=" grid grid-cols-3 justify-center gap-10 py-12">
        {
            mywork_data.map((val)=>{
                return <div className=" project-card rounded-xl ">
                <img className="rounded-xl" src={val.w_img} alt="" style={{height:'240px', width:'418px'}}/>
                {/* // details part of card // */}
                <div className="px-3 ">
                  <h1 className="text-2xl font-bold pt-8">{val.w_title}</h1>
                  <p className="pt-3 text-gray-300">{val.w_desc}</p>
                  {/* // language use section /// */}
                  {/* <div className="lng-section flex gap-8 justify-center items-center py-8">
                    <span>React</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div> */}
                  
                  {/* // github link // */}
                  <a href="#">
                  <div className="inline-block items-center my-4 py-3 px-6  rounded-full uppercase bg-gradient-to-r from-[#b923e1] to-[#da7c25] tracking-wide transition-transform duration-200 ease-in-out  hover:translate-y-[-3px]  ">
                    <i className="fab fa-github"></i>
                    <span className="text-sm font-bold pl-1">View On Github</span>
                  </div>
                  </a>
                </div>
              </div>
            })
        }
      </div>
    </div>
  );
};

export default Experience;
