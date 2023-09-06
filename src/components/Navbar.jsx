import React, { useState } from 'react'
import vite from '/vite.svg'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
const Navbar = () => {

  const [nav, setNav] = useState(false)

  const Navlinks = [
    {
      id: 1,
      title: 'home',
      url: '/'
    },
    {
      id: 2,
      title: 'about',
      url: '/'
    },
    {
      id: 3,
      title: 'tracks',
      url: '/'
    },
    {
      id: 4,
      title: 'price & opportunities',
      url: '/'
    },

    {
      id: 5,
      title: 'sponers',
      url: '/'
    },

    {
      id: 6,
      title: 'faq',
      url: '/'
    },

    {
      id: 7,
      title: 'contact',
      url: '/'
    },
  ]

  return (

    <nav className='glass w-full flex items-center justify-between p-4 fixed z-20'>
      <div className='font-bold px-2 flex items-center gap-3 text-xl'>
        <img src={vite} className=' w-7' alt="vite logo" />
        Sudo
      </div>
      <div className='flex items-center  justify-evenly'>

        <div className=' hidden lg:flex'>
        {
        Navlinks.map((navitem) => (
          <li key={navitem.id} className=' list-none px-3 py-4 capitalize text-gray-300 cursor-pointer  hover:text-gray-100 hover:font-semibold' >{navitem.title}</li>
        ))
      }
        </div>

        <div onClick={() => setNav(!nav)} className=' text-2xl p-3 font-bold lg:hidden'>
          {nav ? <FaTimes /> : <HiMenuAlt3 className=' font-thin' />}
        </div>

      </div>

     {
      nav &&  <div className='w-full flex flex-col h-screen text-xl font-semibold gap-5 py-10 items-center absolute navGlass top-[75px] left-0  '>
      {
        Navlinks.map((navitem) => (
          <li key={navitem.id} onClick={ ()=>setNav(!nav)} className=' list-none px-3 py-2 capitalize text-gray-100 cursor-pointer  hoverz:text-gray-100 hover:font-semibold' >{navitem.title}</li>
        ))
      }
    </div>
     }


     
    </nav>
  )
}

export default Navbar