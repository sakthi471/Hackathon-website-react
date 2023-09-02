import React from 'react'

const StepThree = () => {
  return (

<div className="flex justify-center">
      <form className="w-[40%]">
     
        <div className="flex flex-col py-1" >
          <label className=" text-gray-300 capitalize" htmlFor="">Name</label>
          <input className=" rounded-sm bg-slate-200 px-2 py-1 text-black focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" name="" id="" />
        </div>
        <div className="flex flex-col py-1"> 
          <label className=" text-gray-300 capitalize" htmlFor="">department</label>
          <input className=" rounded-sm bg-slate-200 px-2 py-1 text-black focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
        <div className="flex flex-col py-1">
          <label className=" text-gray-300 capitalize" htmlFor="">phone</label>
          <input className=" rounded-sm bg-slate-200 px-2 py-1 text-black focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
        <div className="flex flex-col py-1">
          <label className=" text-gray-300 capitalize" htmlFor="">email</label>
          <input className=" rounded-sm bg-slate-200 px-2 py-1 text-black focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
        <div className="flex flex-col py-1">
          <label className=" text-gray-300 capitalize" htmlFor=""> reg number</label>
          <input className=" rounded-sm bg-slate-200 px-2 py-1 text-black focus:outline-blue-700 focus:outline-3 outline-none border-none"type="text" />
        </div>
      </form>
    </div>  
      )
}

export default StepThree