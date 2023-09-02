import React from 'react'
import qualcomm from '/sponers/qualcomm.svg'
import bharatX from '/sponers/bharatX.svg'
import bluelearn from '/sponers/bluelearn.svg'
import gradvine from '/sponers/gradvine.svg'
import postman from '/sponers/qualcomm.svg'
import unstop from '/sponers/unstop.png'




const Sponers = () => {
  const sponers=[
    {
        id:1,
        img:qualcomm
    },
    {
        id:2,
        img:bharatX
    },
    {
        id:3,
        img:bluelearn
    },
    {
        id:4,
        img:gradvine
    },
    {
        id:5,
        img:postman
    },
    {
        id:6,
        img:unstop
    },
  ]

  return (
    <div className='w-full flex flex-col items-center py-20 '>
         <h1 className='text-2xl font-bold py-5'>Sponers</h1>
       <div className='flex flex-wrap p-6 gap-20 w-[80%] justify-center items-center'>
           {
            sponers.map(({id,img})=>(
                <div key={id} className='w-[300px] p-8  min-h-[200px]  flex items-center rounded-md justify-center bg-blue-900 ' > 
                <img src={img} alt="" />
              </div>
            ))
           }
       </div>
    </div>
  )
}

export default Sponers