import React from "react";

const   StepOne = ({ inputHandler,input}) => {
  return (
    <div className="flex w-[50%]">
      <form className="w-full flex flex-col gap-3">
        <div className="flex flex-col w-full ">

          <label className=" text-gray-200  capitalize py-1 font-medium   text-lg" htmlFor="team_name" >Team Name</label>
          <input value={input.team_name}  name="team_name"  onChange={inputHandler} placeholder="Enter your Team name" className=" focus:font-medium formInputGlass rounded-sm text-white-100 px-2 py-2   focus:outline-blue-700 focus:outline-3 outline-none border-no ne " type="text" id="team_name" />
        </div>
        <div className="flex flex-col py-1" >
          <label className=" text-gray-200  capitalize py-1 font-medium text-lg" htmlFor="">Name</label>
          <input   value={input.team_member_1_name} name="team_member_1_name" onChange={inputHandler} placeholder="Enter your  name" className=" focus:font-medium formInputGlass rounded-sm text-white-100 bg-slate-200 px-2 py-2 focus:outline-blue-700 focus:outline-3 outline-none border-none" type="text" id="" />
        </div>
        <div className="flex flex-col py-1"> 
          <label className=" text-gray-200  capitalize py-1 font-medium text-lg" htmlFor="">department</label>
          <input  value={input.team_member_1_department} name="team_member_1_department" onChange={inputHandler} placeholder ="Enter your Dept  name" className=" focus:font-medium formInputGlass rounded-sm text-white-100 bg-slate-200 px-2 py-2 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
        <div className="flex flex-col py-1">
          <label className=" text-gray-200  capitalize py-1 font-medium text-lg" htmlFor="">phone</label>
          <input value={input.team_member_1_phone} name="team_member_1_phone" onChange={inputHandler} placeholder="Enter your Phone number" className=" focus:font-medium formInputGlass rounded-sm text-white-100 bg-slate-200 px-2 py-2 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
        <div className="flex flex-col py-1">
          <label className=" text-gray-200  capitalize py-1 font-medium text-lg" htmlFor="">email</label>
          <input value={input.team_member_1_email} name="team_member_1_email" onChange={inputHandler} placeholder="Enter your Email" className=" focus:font-medium formInputGlass rounded-sm text-white-100 bg-slate-200 px-2 py-2 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="email" />
        </div>
        <div className="flex flex-col py-1">
          <label className=" text-gray-200  capitalize py-1 font-medium text-lg" htmlFor=""> reg number</label>
          <input value={input.team_member_1_register_number} name="team_member_1_register_number" onChange={inputHandler} placeholder="Enter your Register number" className=" focus:font-medium formInputGlass rounded-sm text-white-100 bg-slate-200 px-2 py-2 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
      </form>
    </div>
);
};

export default StepOne;
