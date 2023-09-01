import React from "react";
import tceLogo from '/tcelogo.svg'
const About = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen p-9">
        <h3 className=" font-bold text-4xl py-4">About</h3>
      <div className="w-[80%] h-[500px] relative liner-border p-[2px] rounded-[20px]">
        <div className=" h-full w-full bg-tertiary rounded-[20px] shadow-card px-10 flex flex-col items-center justify-evenly">
           <img src={tceLogo} alt="tce" className=" rounded-md w-[80%]" />
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
