import React from "react";
import tceLogo from '../assets/tracks/tcelogo.svg'
const About = () => {



  return (
    <div data-aos="fade-left" data-aos-duration="2000"data-aos-offset="600" name="about" id="about" className="flex justify-center items-center flex-col w-full py-10 xl:h-screen">
      <h3 className=" font-bold text-3xl py-6  xl:text-3xl ">About</h3>
      <div className="w-[90%]  relative liner-border p-[2px] rounded-[15px] 2xl:w-[75%]">
        <div className=" h-full text-justify w-full text-gray-200 bg-tertiary rounded-[15px] shadow-card px-8 py-7 flex flex-col items-center  gap-6 justify-evenly lg:py-9 xl:h-[500px] xl:text-lg xl:pt-10 2xl:text-lg">
          <img src={tceLogo} alt="tce" className=" rounded-md w-[400px]  md:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[900px] " />
          Founded in 1957 by philanthropist and industrialist Late Shri.Karumuttu Thiagarajan Chettiar, Thiagarajar College of Engineering (TCE) is a Government Aided Institution and affiliated to Anna University and situated in Madurai, the Temple City .The college is funded by Central and State Governments and Management. The courses offered in TCE are approved by the All India Council for Technical Education (AICTE), New Delhi and Council of Architecture (COA), New Delhi. TCE was granted Autonomy in the year 1987 and the programmes have been accredited by the National Board of Accreditation (NBA). TCE offers 9 Undergraduate programmes, 10 Postgraduate programmes and Doctoral programmes in Engineering, Architecture and Science.
        </div>
      </div>

    </div>
  );
};

export default About;
