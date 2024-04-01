import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
  return (
    <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">EO</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
      </div>

  
      <div  className={nav ? "fixed left-0 top-0 w-full h-full bg-black/50" : "fixed -left-full " }>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-white ease-in-out duration-500" : "fixed -left-full " }>
        <div className="flex justify-between items-center ">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">EO</h1>
        <div onClick={handleNav} className='p-4'>
        {<AiOutlineClose size={20} />}
        </div>
        </div>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default NavBar
