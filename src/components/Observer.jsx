import React, { useEffect, useRef, useState } from 'react'

const Observer = () => {
    
    const containerRef=useRef(null)
   
    const[isVisable,setIsVisable]=useState(false);
      const callback=(entries)=>{
          const [entry]=entries
          setIsVisable(entry.isIntersecting)
      }
   const option={
      root:null,
      rootMargin:"0px",
      threshold:1.0
   }
      useEffect( ( )=>{
           const observer=new IntersectionObserver(callback,option)
           if(containerRef.current) observer.observe(containerRef.current)
      return ()=>{
         if(containerRef.current) observer.unobserve(containerRef.current)
    }

      },[containerRef,option])    

      console.log(isVisable);

  return (
    <div className=' w-full bg-primary  flex flex-col items-center '>
            <div className=' static w-full py-4 bg-red-600 '> {isVisable ? " in viewport:":" not in viewport"} </div>
            <div className='w-full h-screen py-9 bg-orange-600'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ipsum iure distinctio nulla. Minus totam, consequuntur quo beatae saepe earum possimus sunt tempore quas itaque blanditiis corrupti vero, voluptatibus obcaecati.</div>
            <div  ref={containerRef} className=' w-[90%] h-[600px] py-9 bg-pink-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus autem deleniti eaque corporis deserunt, assumenda pariatur architecto sequi excepturi laboriosam. Iusto omnis officiis ducimus reprehenderit eos in qui, ipsum temporibus.
            </div>

            <div ref={containerRef} className=' bg-blue-500 h-screen'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maiores tempore quidem facere? Minima, doloribus fugit! Consequuntur ipsum, deleniti ullam nostrum iusto voluptatibus voluptate, vel provident nemo aliquid atque nesciunt.
            </div>
    </div>
  )
}

export default Observer
