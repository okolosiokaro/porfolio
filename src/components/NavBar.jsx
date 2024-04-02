import React, {useState} from 'react'
import {AiFillProject, AiOutlineClose, AiFillContacts, AiOutlineMenu} from 'react-icons/ai'
import { FaBriefcase, FaGraduationCap, FaHome } from 'react-icons/fa'

const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
  return (
    <div className='w-full'>
      <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" text-3xl font-bold text-blue-500">EO</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><span><FaHome size={20}/></span>Home</li>
        <li className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><span><FaGraduationCap size={25}/></span>Education</li>
        <li className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><span><FaBriefcase size={20}/></span>Experience</li>
        <li className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><span><AiFillProject size={20}/></span>Projects</li>
        <li className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><span><AiFillContacts size={20}/></span>Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
      </div>

  
      <div  className={nav ? "fixed left-0 top-0 w-full h-full bg-black/50" : "fixed -left-full " }>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-white ease-in-out duration-500 rounded-r-xl" : "fixed -left-full " }>
        <div className="flex justify-between items-center ">
        <h1 className="w-full text-3xl font-bold text-blue-500 m-4">EO</h1>
        <div onClick={handleNav} className='p-4'>
        {<AiOutlineClose size={20} />}
        </div>
        </div>
        <ul className="p-4">
          <li className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold"><span><FaHome size={20}/></span>Home</li>
          <li className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold"><span><FaGraduationCap size={25}/></span>Education</li>
          <li className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold"><span><FaBriefcase size={20}/></span>Experience</li>
          <li className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold"><span><AiFillProject size={20}/></span>Projects</li>
          <li className="p-4 flex items-center gap-2 hover:text-blue-700 hover:font-bold"><span><AiFillContacts size={20}/></span>Contact</li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  
  )
}

export default NavBar
