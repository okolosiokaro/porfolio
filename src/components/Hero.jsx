import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='w-full bg-gray-50'>
        <div className='max-w-[1240px] mt-[-96px] h-screen mx-auto text-start flex flex-col justify-center px-2'>
       <p className="text-blue-500 font-bold py-2">Hi my name is</p>
       <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold md:py-4">OKOLOSIO, Oghenekaro Elvis</h1>
       <div className='flex items-center justify-start text-start'>
        <p className='lg:text-5xl md:text-3xl text-lg font-bold py-4'>Frontend Developer proficient in</p>
        <ReactTyped
        className='lg:text-5xl md:text-3xl text-lg text-blue-500 font-bold pl-2'
        strings={["React", "TailwindCSS", "Node Js"]}
        typeSpeed={120}
        backSpeed={140}
        loop
        />
       </div>
       <p className='lg:text-2xl text-lg font-bold text-blue-500'>Let's work on your projects</p>
       <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 px-6 py-3 text-white text-bold hover:bg-blue-700' onclick="window.open('assets/elvis.pdf')">Hire me</button>
      </div>
    </div>

  )
}

export default Hero
