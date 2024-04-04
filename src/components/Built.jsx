import React from 'react'
import { Projects } from '../data/data';
import { AiFillProject } from 'react-icons/ai';

const Built = () => {

  return (
    <div>
    <div  id='project' className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto '>
        <div className='flex gap-2 mb-6'>
            <AiFillProject  size={25} className='mt-1 '/>
            <h3 className=" font-bold mb-4 text-2xl">Projects</h3>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Projects.map((Project) => (
                <div key={Project.id} className='w-full shadow-md flex flex-col p-4 my-4 border border-gray-200 rounded-lg hover:scale-105 duration-300'>
                <div className='mx-auto'>
                 <img alt='/' src={Project.image}/>
                </div>
                <h2 className='text-xl font-bold text-center py-4'>{Project.title}</h2>
                <p className='text-center'>{Project.description}</p>
                <div className='flex flex-row justify-center text-center font-medium mx-auto'>
                <a className='bg-blue-500 rounded-md font-medium my-2 md:my-6 px-6 py-3 text-white text-bold hover:bg-blue-700 mr-2' href={Project.link}>Demo</a>
                    <a className=' rounded-md font-medium my-2 md:my-6 px-6 py-3 text-blue-700 text-bold hover:bg-blue-700 hover:text-white' rel='Github Profile' href={Project.repo}>Github</a>
                </div>
            </div>
          ))}
            
        </div>
        </div>
      
    </div>
   </div>
  )
}

export default Built
