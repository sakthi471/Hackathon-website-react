import React from "react";
import Lottie from 'lottie-react'
import animationData from '../assets/animationData.json'
import { Link } from "react-router-dom";


const Hero = () => {

  return (
    <div className="  w-full  flex flex-col   items-center justify-center xl:flex-row  xl:h-screen xl:px-14 ">
      <div className=" flex w-full items-center justify-center h-[500px] pt-28   lg:gap-6 xl:pt-0"> 
        <div className="flex flex-col items-center px-3   h-[310px]">
          <div className="w-4 rounded-full h-4 bg-violet-600 z-10 "></div>
          <div className=" w-1 h-[350px] violet-gradient rounded-tr-full  rounded-tl-full "></div>
        </div>

        <div className="px-4 py-7 flex flex-col  jutstify-center  gap-8 ">
          <p className="xl:text-xl">NIT-K, NIT-W & NIT-T welcomes you to</p>
          <h2 className="text-4xl font-bold lg:text-5xl ">
            <span className=" text-violet-500">TCE-MDU</span> Hackathon
          </h2>

          <div className="flex flex-col items-start gap-2">
            <p> ⚪ Prizes worth ₹ 100,000+</p>
            <p>
              ⚪ Fulltime and internship opportunities at Qualcomm and BharatX
            </p>
          </div>
          <Link to='/register' ><button className="px-8 py-2 bg-violet-600 rounded-lg font-bold w-[320px] xl:text-xl xl:py-3" >Get Register</button>
          </Link>
        </div>
      </div>
      <div className=" flex w-full justify-center items-center" >
        <div className="w-full  h-[400px] md:h-[600px] md:w-[70%] md:pb-0 lg:h-[600px] lg:w-[50%] xl:flex xl:w-[75%]">
          <Lottie animationData={animationData}  />
        </div>

      </div>

    </div>
  );
};

export default Hero;
