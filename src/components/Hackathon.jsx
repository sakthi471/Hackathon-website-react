import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hackathon = () => {

    const [data, setData] = useState(null)


    useEffect(() => {
         try{
            const getData = async () => {
                const res = await axios.get('https://web-it-like-spider.onrender.com/hackathon/home/')
                console.log (`from get request ${res.status}`);
               setData(res.data)
        
    
            }

            getData();
         }
          catch(e){
             console.log(e.message);
          }

      
        
    },[])


    return (
        <div className='w-full  flex flex-col items-center py-16 '>
            <p className=' text-2xl  text-white font-bold py-5 2xl:text-3xl '>Hackathon   Details</p>
             { data !==null ? (
                 <div className=' liner-border w-[93%] min-h-[700px]  h-full rounded-lg p-[2px] xl:w-[80%] 2xl:w-[70%] hackathonShadow'>
                 <div className='w-full bg-tertiary min-h-[700px] flex flex-col px-9  rounded-lg py-8 gap-10 lg:gap-16 2xl:gap-14 '>
 
                     <p className=' text-xl  font-bold border-b-[3px] border-blue-600 block text-center w-[210px] lg:mx-auto'> {data.name}</p>
                     <div className='flex flex-col gap-3 lg:flex-row  lg:flex-wrap lg:w-[100%] lg:justify-between xl:w-[80%] xl:mx-auto'>
                         <div className=' lg:flex lg:flex-col lg:gap-1'>
                             <p className=' capitalize text-lg  font-medium'> start date   :  <span className=' text-base  text-gray-200 font-medium'> {data.start_date}</span></p>
                             <p className=' capitalize text-lg  font-medium'> end date: <span className='text-base  text-gray-200 font-medium '>{data.end_date}</span></p>
                         </div>
                         <div className='lg:flex lg:flex-col lg:gap-1'>
                             <p className=' capitalize text-lg  font-medium'>registration start date : <span className='text-base  text-gray-200 font-medium '> {data.registration_start_date}</span></p>
                             <p className=' capitalize text-lg  font-medium'>registration end date: <span className='text-base  text-gray-200 font-medium '> {data.registration_end_date}</span></p>
                         </div>
                         <div>
                             <p className=' capitalize text-lg  font-medium'>  contact number: <span className='text-base  text-gray-200 font-medium '>{data.contact_number}</span> </p>
                             <p className=' capitalize text-lg  font-medium'> Gamil: <span className='text-base text-gray-200 font-medium '>msakthi@student.tce.edu</span> </p>
                         </div>
 
                     </div>
 
                     <div className='flex flex-col  items-center py-10 2xl:py-2 '>
                         <p className=' text-2xl font-semibold capitalize border-b-[3px] mb-9 w-[120px] text-center border-blue-600'>rounds</p>
 
                         <div className=' flex flex-col items-center md:flex-row md:justify-around md:w-full xl:w-[70%]' >
 
                             <div className='w-[150px] h-[150px] groupGradinet rounded-full text-center flex flex-col justify-center items-center'>
                                 <p className=' font-bold'> {data.rounds[0].round_number} </p>
                                 <p className=' font-bold'>{data.rounds[0].round_date}</p>
                             </div>
                             <div className='w-[7px] h-[90px] groupGradinet md:rotate-90 lg:h-[175px] 2xl:h-[230px] '>
 
                             </div>
                             <div className='w-[150px] h-[150px] groupGradinet rounded-full text-center flex flex-col justify-center items-center'>
                                 <p className=' font-bold'> {data.rounds[1].round_number}</p>
                                 <p className=' font-bold'> {data.rounds[1].round_date}</p>
                             </div>
                             <div className='w-[7px] h-[90px] groupGradinet md:rotate-90 lg:h-[175px] 2xl:h-[230px]    '>
 
                             </div>
                             <div className='w-[150px] h-[150px] groupGradinet rounded-full text-center flex flex-col justify-center items-center'>
                                 <p className=' font-bold'>{data.rounds[2].round_number}</p>
                                 <p className=' font-bold'> { data.rounds[2].round_date}</p>
                             </div>
                         </div>
                     </div>
 
                     <div className='flex flex-col gap-5 lg:flex-row lg:justify-center 2xl:pb-4 2xl:justify-around'>
                         <div className=' px-2 flex flex-col gap-2 '>
                             <p className=' capitalize text-xl font-semibold'>announcements</p>
                             <ul className=' list-disc px-10'>
                                 <li> {data.announcements[0].announcement_text} </li>
                                 <li> {data.announcements[1].announcement_text}</li>
                             </ul>
                         </div>
 
                         <div className=' px-2 flex flex-col gap-2'>
                             <p className=' font-semibold text-xl capitalize'>organizers</p>
                             <ul className='list-disc px-10'>
                                 <li> {data.organizers[0].organizer_info} </li>
                                 <li> {data.organizers[1].organizer_info}</li>
                             </ul>
                         </div>
                     </div>
 
                 </div>
             </div>
             ):( <div className=' w-[80%] rounded-sm flex items-center justify-center border-[1px] px-6 py-10 '> <p  className=' text-2xl font-bold '>Network error plese try again </p></div> ) }
        </div>
    )
}

export default Hackathon
