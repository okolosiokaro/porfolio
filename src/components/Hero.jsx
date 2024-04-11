import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  const downloadCv = () => {
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1l-HlNDZwES1tZYEKQnxfjcvX956ExqWHGKmK1UfvNSw';
    link.click();
  }
  
  return (
    <div id='home' className='w-full bg-gray-100 px-2 md:px-4'>
      <div className='max-w-[1240px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
       <p className="text-blue-500 font-bold py-2">Hi my name is</p>
       <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold md:py-4">OKOLOSIO, Oghenekaro Elvis</h1>
       <div className='flex items-center justify-center text-center'>
        <p className='lg:text-4xl md:text-3xl text-lg font-bold py-4'>Frontend Developer proficient in</p>
        <ReactTyped
        className='lg:text-4xl md:text-3xl text-lg text-blue-500 font-bold pl-2'
        strings={["React", "TailwindCSS", "Node Js"]}
        typeSpeed={120}
        backSpeed={140}
        loop
        />
       </div>
       <p className='lg:text-2xl text-lg font-bold text-blue-500'>Let's work on your projects</p>
       <button className='mx-auto bg-blue-500 w-[200px] rounded-md font-medium my-6 px-6 py-3 text-white text-bold hover:bg-blue-700' onClick={downloadCv}>Resume</button>
      </div>
    </div>

  )
}

export default Hero
