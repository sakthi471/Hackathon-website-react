import React, { useState } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';


import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Register = () => {
  let [page, setPage] = useState(0);
  const limit = 3;



  const handlePrev = () => {
    if (page <= 0) {
      setPage(0)
    }
    else {
      setPage(page--)
    }
  }


  const [input, setInput] = useState({
    team_name: "",
    team_member_1_name: "",
    team_member_1_department: "",
    team_member_1_phone: "",
    team_member_1_email: "",
    team_member_1_register_number: "",

    team_member_2_name: "",
    team_member_2_department: "",
    team_member_2_phone: "",
    team_member_2_email: "",
    team_member_2_register_number: "",

    team_member_3_name: "",
    team_member_3_department: "",
    team_member_3_phone: "",
    team_member_3_email: "",
    team_member_3_register_number: "",


  })

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  const hadleSubmit = async (e) => {
    e.preventDefault()
    console.log(input);

  }




  const renderComponen = () => {
    switch (page) {
      case 0:
        return <StepOne inputHandler={inputHandler} input={input} />
      case 1:
        return <StepTwo inputHandler={inputHandler} input={input} />
      case 2:
        return <StepThree inputHandler={inputHandler} input={input} />

      default:
        return null;
    }
  }


  return (
    <div className="w-full h-screen  flex flex-col gap-5   justify-center items-center ">
      <h1 className=" font-semibold text-2xl">Register</h1>
      <div className="w-[60%]  formglass flex flex-col items-center rounded-md gap-7 py-7 justify-around ">
        <div className="flex  items-center gap-6 text-lg font-semibold">
          <p>Memeber</p>
          <div className=" w-10 h-10 rounded-[50px] flex items-center justify-center font-bold text-white bg-primary">
            {page + 1}
          </div>
          <div>Details</div>
        </div>
        {
          renderComponen()
        }
        <div className="w-[50%] flex justify-between items-center">
          <button style={page === 0 ? { visibility: 'hidden' } : {}} className=" flex items-center gap-4 justify-center font-bold px-3 py-1  rounded-md w-[110px] btnGlass" onClick={() => page<=0? setPage(0):setPage(page-=1)}><AiOutlineArrowLeft /> Back  </button >

          {
            page === 2 ? (<button onClick={(e) => hadleSubmit(e)} className="flex items-center gap-4 justify-center font-bold px-3 py-1  rounded-md w-[110px]  btnGlass " >Submit</button>) : (
              <button className="flex items-center gap-4 justify-center font-bold px-3 py-1  rounded-md w-[110px] btnGlass " onClick={() => page >= 2 ? setPage(limit - 1) : setPage(page += 1)} >Next <AiOutlineArrowRight /> </button>)
          }


        </div>
      </div>
    </div>
  );
};

export default Register;
