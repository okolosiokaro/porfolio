import React, {useState} from 'react'
import {AiFillProject, AiOutlineClose, AiFillContacts, AiOutlineMenu} from 'react-icons/ai'
import { FaBriefcase, FaHome, FaTools } from 'react-icons/fa'

const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
   
}

nav?  document.body.classList.add('overflow-hidden') :  document.body.classList.remove('overflow-hidden')

  return (
    <div className='z-50 bg-gray-100/50 sticky top-0 w-full'>
      <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" text-3xl font-bold">Elvis</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li><a href='#home'  className="p-4 flex flex-row items-center gap-1 hover:text-blue-700 hover:font-bold"><FaHome size={20}/>Home</a></li>
        <li><a href='#experience' className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><FaBriefcase size={20}/>Experience</a></li>
        <li><a href='#skill' className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><FaTools size={20}/>Skill </a></li>
        <li><a href='#project' className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><AiFillProject size={20}/>Projects</a></li>
        <li><a href='#contact' className="p-4 flex items-center gap-1 hover:text-blue-700 hover:font-bold"><AiFillContacts size={20}/>Contact</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
      </div>

  
      <div onClick={handleNav}  className={nav ? "z-40 fixed left-0 top-0 w-full h-full bg-black/50" : "fixed -left-full " }></div>
      <div className={nav ? "z-50 fixed left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500 rounded-r-xl" : "fixed -left-full " }>
        <div className="flex justify-between items-center ">
        <h1 className="w-full text-3xl font-bold m-4">Elvis</h1>
        <div onClick={handleNav} className='p-4'>
        {<AiOutlineClose size={20} />}
        </div>
        </div>
        <ul className="p-4">
          <li><a onClick={handleNav}  className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold" href='#home'><FaHome size={20}/>Home</a></li>
          <li><a onClick={handleNav}  className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold" href='#experience'><FaBriefcase size={20}/>Experience</a></li>
          <li><a onClick={handleNav}  className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold" href='#skill'><FaTools size={20}/>Skill</a></li>
          <li><a onClick={handleNav}  className="p-4 flex items-center gap-2 border-b-2 border-black-700 hover:text-blue-500 hover:font-bold" href='#project'><AiFillProject size={20}/>Projects</a></li>
          <li><a onClick={handleNav} className="p-4 flex items-center gap-2 hover:text-blue-700 hover:font-bold" href='#contact'><AiFillContacts size={20}/>Contact</a></li>
        </ul>
      </div>
      </div>
    </div>
  
  )
}

export default NavBar
