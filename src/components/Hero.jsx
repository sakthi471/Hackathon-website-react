import React from "react";
import Lottie from 'lottie-react'
import animationData from '../assets/animationData.json'

const Hero = () => {
  
  return (
    <div className=" relative mx-auto w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-5 py-8 pl-8 h-[350px]"> 
        <div className="w-4 rounded-full h-4 bg-violet-600 z-10 "></div>
        <div className=" w-1 h-[250px] violet-gradient rounded-tr-full  rounded-tl-full "></div>
      </div>

      <div className="px-4 py-7 flex flex-col items-center gap-4 h-[300px]">
        <p>NIT-K, NIT-W & NIT-T welcomes you to</p>
        <h2 className="text-5xl font-bold ">
          <span className=" text-violet-500">TCE-MDU</span> Hackathon
        </h2>
     
        <div className="flex flex-col items-center gap-1">
           <p> ⚪ Prizes worth ₹ 100,000+</p>
          <p>
            ⚪ Fulltime and internship opportunities at Qualcomm and BharatX
          </p>
        </div>
            <button className="px-8 py-2 bg-violet-600 rounded-lg font-bold" >Get Register</button>
      </div>
      <div className="w-[30%] ml-44 flex flex-col flex-start h-[600px]" >
        {/* <Lottie animationData={animationData} /> */}
           <div>
             !!!!
           </div>
      </div>

    </div>
  );
};

export default Hero;
