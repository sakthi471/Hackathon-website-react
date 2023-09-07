import React from 'react'
import  tracks from '/Tracks_LaptopVector.svg'

const Card = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className=' flex flex-col w-[350px] bg-violet-500 p-7 h-[350px] duration-1000  hover:h-[600px] overflow-hidden'>
              <div className=' flex flex-col gap-3' >
                    <img src={tracks} alt="" />
                    <p className=' font-bold text-2xl'>Development</p>
              </div>
               <div className='py-10'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nesciunt assumenda iure, veniam nostrum ullam, corrupti nemo exercitationem facilis mollitia deleniti. Doloremque, temporibus cupiditate! Labore numquam eum enim porro in!</p>
               </div>
          </div>
    </div>
  )
}

export default Card
