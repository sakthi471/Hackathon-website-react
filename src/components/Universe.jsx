import React from "react";
import { ReactNebula } from "@flodlc/nebula";
import Register from "./Register";

const Universe = () => {
  return (
    <div className=" w-full h-screen  relative  ">
       
      <div className=" relative w-full h-full">
        <ReactNebula
          config={{
            starsCount: 300,
            starsRotationSpeed: 0.5,
            nebulasIntensity: 20,
            cometFrequence: 200,
            sunScale: 2,
            solarSystemSpeedOrbit: 10,
            planetsScale: 2,
          }}
        />
        
      </div>
      <div className=" absolute w-[80%] top-7 left-[200px]">
            <Register/>
      </div>
    </div>
  );
};

export default Universe;
