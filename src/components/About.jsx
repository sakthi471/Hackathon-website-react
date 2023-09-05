import React from "react";
import tceLogo from '/tcelogo.svg'
const About = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full py-10">
        <h3 className=" font-bold text-3xl py-6">About</h3>
      <div className="w-[90%]  relative liner-border p-[2px] rounded-[15px]">
        <div className=" h-full text-justify w-full text-gray-200 bg-tertiary rounded-[15px] shadow-card px-8 py-7 flex flex-col items-center  gap-6 justify-evenly">
           <img src={tceLogo} alt="tce" className=" rounded-md w-[300px]" />
          ACM NITK, Spider-NIT Trichy, and CSEA-NIT Warangal proudly present
          TRI-NIT Hackathon. A 36-hour-long hackathon where thousands of
          students from all over India come together and work on a variety of
          problem statements. Problem statements include both software and
          electronic tracks. This collaboration between three of the most
          prestigious institutions in the country brings you a golden
          opportunity to test your skills against the best of the best
          contenders for cash prizes, goodies, and more! Participants will be
          building projects from scratch, which will be presented to our panel
          of experienced judges to decide our winners finally. Join us and use
          this opportunity to think out of the box!
        </div>
      </div>
    </div>
  );
};

export default About;
