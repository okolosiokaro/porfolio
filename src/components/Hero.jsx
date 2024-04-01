import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=''>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
       <p className="text-[#00df9a] font-bold p-2">Hi my name is</p>
       <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">OKOLOSIO, Oghenekaro Elvis</h1>
       <div className='flex items-center justify-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Frontend Developer proficient in</p>
        <ReactTyped
        className='md:text-5xl sm:text-4xl text-xl text-gray-500 font-bold pl-2'
        strings={["React", "TailwindCSS", "Node Js"]}
        typeSpeed={120}
        backSpeed={140}
        loop
        />
       </div>
       <p className='md:text-2xl text-xl font-bold text-gray-500'>Let's work on your projects</p>
       <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black text-bold'>Hire me</button>
      </div>
    </div>
  )
}

export default Hero
