import React from "react";
import { ReactNebula } from "@flodlc/nebula";
import Register from "./Register";

const Universe = () => {
  return (
    <div className=" w-full min-h-screen py-10 relative">
      <div className="py-4 relative w-full h-screen">
        {/* <ReactNebula
          config={{
            starsCount: 50,
            starsRotationSpeed: 0.5,
            nebulasIntensity: 10,
            cometFrequence: 100,
            sunScale: 0,
            solarSystemSpeedOrbit: 10,
            planetsScale: 0,
          }}
        /> */}
      </div>
      <div className=" z-30 absolute top-28 left-36 bg-[#151030] p-5">
           universe
      </div>
    </div>
  );
};

export default Universe;
