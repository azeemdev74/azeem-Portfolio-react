import React from "react";
import "../Experience/Experience.css";
import mywork_data from "./mywork_data";

const Experience = () => {
  return (
    <div id="portfolio" className="flex flex-col justify-center items-center gap-8 sm:px-36  px-0 py-12">
      {/* // My experience section heading // */}
      <div className="relative">
        <h1 className="lg:text-6xl md:4xl sm:3xl text-4xl font-semibold px-10">My latest work</h1>
        <img
          className="absolute bottom-0 right-0 -z-10 sm:w-40 w-24 mr-2 sm:mr-0"
          src="assets/theme_pattern.svg"
          alt="theme_pattern"
        />
      </div>
      {/* // Project cards //  */}
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-20 py-12 md:gap-10 lg:gap-12  px-6 sm:px-0">
        {
            mywork_data.map((val)=>{
                return <div className=" project-card rounded-xl ">
                <img className="rounded-xl items-center" src={val.w_img} alt="" style={{height:'240px', width:'418px'}}/>
                {/* // details part of card // */}
                <div className="px-3 flex flex-col justify-between items-start h-[40vh] ">
                  <div>
                  <h1 className="text-2xl font-bold pt-8">{val.w_title}</h1>
                  <p className="pt-3 text-gray-300">{val.w_desc}</p>
                  </div>
                  {/* // language use section /// */}
                  {/* <div className="lng-section flex gap-8 justify-center items-center py-8">
                    <span>React</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div> */}
                  
                  {/* // github link // */}
                  
                  <div className="inline-block items-center my-4 py-3 px-6  rounded-full uppercase bg-gradient-to-r from-[#b923e1] to-[#da7c25] tracking-wide transition-transform duration-200 ease-in-out  hover:translate-y-[-3px]  ">
                    <i className="fab fa-github"></i>
                    <span className="text-sm font-bold pl-1">View On Github</span>
                  </div>
                
                </div>
              </div>
            })
        }
      </div>
    </div>
  );
};

export default Experience;
