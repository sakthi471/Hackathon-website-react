import React from 'react'
import vite from '/vite.svg'
const Navbar = () => {

  const Navlinks=[
    {
      id:1,
      title:'home',
      url:'/'
    },
    {
      id:2,
      title:'about',
      url:'/'
    },
    {
      id:3,
      title:'tracks',
      url:'/'
    },
    {
      id:4,
      title:'price & opportunities',
      url:'/'
    },
    
    {
      id:5,
      title:'sponers',
      url:'/'
    },

    {
      id:6,
      title:'faq',
      url:'/'
    },

    {
      id:7,
      title:'contact',
      url:'/'
    },
  ]

  return (

      <nav className='glass w-full flex items-center justify-between p-5 fixed z-20'>
          <div className='font-bold px-2 flex items-center gap-3 text-xl'>
             <img src={vite} alt="vite logo" /> 
                Sudo
          </div>
          <div className='flex items-center  justify-evenly'>
            {
              Navlinks.map((navitem)=>(
                <li key={navitem.id} className=' list-none px-3 capitalize text-gray-300 cursor-pointer  hover:text-gray-100 hover:font-semibold' >{navitem.title}</li>
              ))
            }
          </div>

          
      </nav>
    )
}

export default Navbar