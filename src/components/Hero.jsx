import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
       <p className="text-[#00df9a] font-bold p-2">GROW WITH DATA ANALYTICS</p>
       <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">Grow With Data</h1>
       <div className='flex items-center justify-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
        <ReactTyped
        className='md:text-5xl sm:text-4xl text-xl text-gray-500 font-bold pl-2'
        strings={["BTB", "BTS", "SSAS"]}
        typeSpeed={120}
        backSpeed={140}
        loop
        />
       </div>
       <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SSAS Platforms.</p>
       <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black text-bold'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
