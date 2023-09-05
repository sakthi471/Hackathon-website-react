import React from "react";

const StepTwo = ({inputHandler,input}) => {
  return  <div  className="flex w-[50%]">
  <form className="w-full flex flex-col gap-5">
    <div className="flex flex-col py-1" >
      <label className=" text-gray-200 capitalize py-1 font-medium text-lg" htmlFor="">Name</label>
      <input value={input.team_member_2_name} onChange={inputHandler} placeholder="Enter your name" className=" focus:font-medium  formInputGlass rounded-sm bg-slate-200 px-2 py-2  text-white-100 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" name="team_member_2_name"   />
    </div>
    <div className="flex flex-col py-1"> 
      <label className=" text-gray-200 capitalize py-1 font-medium text-lg" htmlFor="">department</label>
      <input  value={input.team_member_2_department} onChange={inputHandler} placeholder ="Enter your Dept name" className=" focus:font-medium  formInputGlass rounded-sm bg-slate-200 px-2 py-2 text-white-100 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" name="team_member_2_department" />
    </div>
    <div className="flex flex-col py-1">
      <label className=" text-gray-200 capitalize py-1 font-medium text-lg" htmlFor="">phone</label>
      <input value={input.team_member_2_phone} onChange={inputHandler} placeholder="Enter your Phone number" className=" focus:font-medium  formInputGlass rounded-sm bg-slate-200 px-2 py-2 text-white-100 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" name="team_member_2_phone" />
    </div>
    <div className="flex flex-col py-1">
      <label className=" text-gray-200 capitalize py-1 font-medium text-lg" htmlFor="">email</label>
      <input value={input.team_member_2_email} onChange={inputHandler} placeholder="Enter your Email" className=" focus:font-medium  formInputGlass rounded-sm bg-slate-200 px-2 py-2 text-white-100 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="email" name="team_member_2_email" />
    </div>
    <div className="flex flex-col py-1">
      <label className=" text-gray-200 capitalize py-1 font-medium text-lg" htmlFor=""> reg number</label>
      <input value={input.team_member_2_register_number} onChange={inputHandler} placeholder="Enter your Register number" className=" focus:font-medium  formInputGlass rounded-sm bg-slate-200 px-2 py-2 text-white-100 focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" name="team_member_2_register_number" />
    </div>
  </form>
</div>
};

export default StepTwo;
