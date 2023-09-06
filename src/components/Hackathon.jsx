import React from 'react'

const Hackathon = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center '>
            <p className=' text-2xl  text-white font-bold py-5'>Hackathon Details</p>



            <div className=' liner-border w-[93%] min-h-[800px]  h-full rounded-lg p-[2px]'>
                <div className='w-full bg-tertiary min-h-[800px] flex flex-col px-5 rounded-lg py-4 gap-8'>
                    <p className=' text-xl  font-bold border-b-[3px] border-blue-600 block w-[60%]'>Hackathon Contest</p>
                    <div className=' py-4'>
                        <p className=' capitalize text-lg  font-medium'> start date   :  <span className=' text-base font-medium text-gray-300'> 2023-08-26</span></p>
                        <p className=' capitalize text-lg  font-medium'> end date: <span className='text-base font-medium '>2023-08-26</span></p>
                        <p className=' capitalize text-lg  font-medium'>registration start date : <span className='text-base font-medium '> 2023-08-26</span></p>
                        <p className=' capitalize text-lg  font-medium'>registration end date: <span className='text-base font-medium '> 2023-08-26</span></p>
                        <p className=' capitalize text-lg  font-medium'>  contact number: <span className='text-base font-medium '>9876543210</span> </p>


                    </div>

                    <div className='flex flex-col gap-3 items-center '>
                        <p className=' text-2xl font-semibold capitalize border-b-[3px] mb-4 w-[120px] text-center border-violet-500'>rounds</p>
                        <div className='w-[150px] h-[150px] bg-blue-500 rounded-full text-center flex flex-col justify-center items-center'>
                            <p className=' font-bold'>1</p>
                            <p className=' font-bold'>2023-08-28</p>
                        </div>
                        <div className='w-[150px] h-[150px] bg-blue-500 rounded-full text-center flex flex-col justify-center items-center'>
                            <p className=' font-bold'>1</p>
                            <p className=' font-bold'>2023-08-28</p>
                        </div>
                        <div className='w-[150px] h-[150px] bg-blue-500 rounded-full text-center flex flex-col justify-center items-center'>
                            <p className=' font-bold'>1</p>
                            <p className=' font-bold'>2023-08-28</p>
                        </div>
                    </div>

                    <div className=' px-2 flex flex-col gap-2 '>
                        <p className=' capitalize text-xl font-semibold'>announcements</p>
                        <ul className=' list-disc px-10'>
                            <li> This is first announcement!</li>
                            <li> This is second announcement</li>
                        </ul>
                    </div>

                    <div className=' px-2 flex flex-col gap-2'>
                        <p className=' font-semibold text-xl capitalize'>organizers</p>
                        <ul className='list-disc px-10'>
                            <li>IE STUDENT CHAPTER</li>
                            <li> CSI STUDENT CHAPTER</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hackathon
