import React, { useEffect, useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Register = () => {
  let [page, setPage] = useState(0);
  const limit=3;  



   const handleNext=()=>{
          if(page>=2){
             setPage(limit-1)
          }  
          else{
      
              setPage(page++)
        }    
   }

   const handlePrev=()=>{
         if(page<=0){
             setPage(0)
         }
         else{
             setPage(page--)
         }
   }
   const FormComponents=[
      {
         id:0,
         Comp:<StepOne/>
      },
      {
        id:1,
        Comp:StepTwo
     },
     {
        id:2,
        Comp:StepThree
     },
   ]

  
   useEffect(()=>{
       
    const handleFind =()=>{
        const temp= FormComponents.find((comp)=>comp.id===page)
       
     }

     handleFind()
   },[page])

   
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-[70%] min-h-[500px] bg-[#151030] flex flex-col items-center gap-7 py-6">
             <div className=" w-10 h-10 rounded-[50px] flex items-center justify-center text-white bg-primary">
                {page+1}
             </div>
              { ()=>{
                   const result=FormComponents.find(({id,Comp})=> id===page )
                   const redercomp=result.Comp;

                   return( 
                     <redercomp/>
                   )
              }}
             <div className="flex justify-between w-full px-7">
                 <button className="px-3  rounded-md w-[110px] bg-violet-600 "  onClick={ ()=>handlePrev()}>Back</button>
                 <button className="px-3  rounded-md w-[110px] bg-violet-600 " onClick={()=>handleNext()} >Next</button>

             </div>
      </div>
    </div>
  );
};

export default Register;
