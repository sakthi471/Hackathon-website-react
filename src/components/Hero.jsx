import React from "react";
import Lottie from 'lottie-react'
import animationData from '../assets/animationData.json'
import {  Link } from "react-router-dom";


const Hero = () => {

  return (
    <div className="  w-full  flex flex-col items-center justify-center ">
      <div className=" flex w-full items-center justify-center h-[700px]">
        <div className="flex flex-col items-center px-3 py-8  h-[390px]">
          <div className="w-4 rounded-full h-4 bg-violet-600 z-10 "></div>
          <div className=" w-1 h-[250px] violet-gradient rounded-tr-full  rounded-tl-full "></div>
        </div>

        <div className="px-4 py-7 flex flex-col  jutstify-center  gap-8 ">
          <p>NIT-K, NIT-W & NIT-T welcomes you to</p>
          <h2 className="text-4xl font-bold ">
            <span className=" text-violet-500">TCE-MDU</span> Hackathon
          </h2>

          <div className="flex flex-col items-start gap-2">
            <p> ⚪ Prizes worth ₹ 100,000+</p>
            <p>
              ⚪ Fulltime and internship opportunities at Qualcomm and BharatX
            </p>
          </div>
          <Link to='/register' >   <button className="px-8 py-2 bg-violet-600 rounded-lg font-bold w-[320px]" >Get Register</button>
          </Link>
        </div>
      </div>
      <div className=" flex w-full flex-col justify-center items-center" >
        <div className="w-full pb-10 h-[400px]">
          <Lottie animationData={animationData} />
        </div>

      </div>

    </div>
  );
};

export default Hero;
