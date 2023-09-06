import React from "react";

import CountUp from "react-countup";

const Statistics = () => {
  const statistic = [
    {
      id: 1,
      title: "Participants",
      value: 1000,
    },
    {
      id: 2,
      title: "Teams",
      value: 200,
    },
    {
      id: 3,
      title: "Problem Statements",
      value: 10,
    },
    {
      id: 4,
      title: "Units of fun",
      value: 10000,
    },
  ];

  return (
    <div className="w-full  flex flex-col items-center py-14 md:gap-3" >
      <p className="text-3xl font-bold py-7 "> Statistics</p>
         <div className="flex gap-10 flex-wrap w-[100%] justify-center  items-center md:py-8 md:gap-16 xl:w-[90%] 2xl:w-[60%] 2xl:gap-24 ">
         {statistic.map(({ id, title, value }) => (
        <div   key ={id}className=" w-[330px] h-[250px] xl:w-[400px] xl:h-[300px] stastic-gradinet rounded-md flex flex-col items-center  justify-center">
          <h1 className="font-bold text-2xl"> {title}</h1>
          <h3 className="font-bold text-3xl">
            <CountUp
              end={value}
              enableScrollSpy={true}
              delay={2}
              scrollSpyDelay={3}
              duration={1}
            />
            +
          </h3>
        </div>
      ))}
         </div>
    </div>
  );
};

export default Statistics;
