import React from 'react'
import { FaTools } from 'react-icons/fa'
import { Backends, Frontends } from '../data/data'

const Skill = () => {
  return (
     <div id='skill' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
      <div className='flex flex-col justify-center'> 
        <div className='flex gap-2 mb-6'>
            <FaTools  size={20} className='mt-1 '/>
            <div>
            <h3 className=" font-bold mb-4 text-2xl">Skills</h3>
            <p>Technologies and tools</p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-2'>
            <div className="border border-gray-200 rounded-lg shadow-md p-2">
                    <h3 className=" font-bold mb-4">Frontend</h3>
                    <div className="grid grid-cols-2 pt-2 ml-2 gap-2">
                        {Frontends.map((Frontend) => (
                            <article className='flex py-2 gap-2' key={Frontend.id}>
                        {Frontend.icon}
                            <h3 className='font-bold text-xl'>{Frontend.tool}</h3>
                    </article>
                        ))}
                    
                    </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-md p-2">
                    <h3 className=" font-bold mb-4">Backend</h3>
                    <div className="grid grid-cols-2 gap-2 pt-2 ml-2">
                    {Backends.map((Backend) => (
                            <article className='flex gap-2' key={Backend.id}>
                        {Backend.icon}
                            <h3 className='font-bold text-xl'>{Backend.tool}</h3>
                    </article>
                        ))}
                    </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skill
