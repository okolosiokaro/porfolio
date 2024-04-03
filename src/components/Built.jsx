import React from 'react'
import { Projects } from '../data/data';
import { AiFillProject } from 'react-icons/ai';

const Built = () => {
  const showProject = (Project) => {
    window.location.href = Project.link;
  }
  return (
    <div>
    <div className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto '>
        <div className='flex gap-2 mb-6'>
            <AiFillProject  size={25} className='mt-1 '/>
            <h3 className=" font-bold mb-4 text-2xl">Projects</h3>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Projects.map((Project) => (
                <div key={Project.id} className='w-full shadow-md flex flex-col p-4 my-4 border border-gray-200 rounded-lg hover:scale-105 duration-300'>
                <img className='w-1/2 mx-auto' src='' alt="/"/>
                <h2 className='text-xl font-bold text-center py-4'>{Project.title}</h2>
                <p className='text-center'>{Project.description}</p>
                <div className='flex flex-row justify-center text-center font-medium mx-auto'>
                <button className='bg-blue-500 rounded-md font-medium my-2 md:my-6 px-6 py-3 text-white text-bold hover:bg-blue-700 mr-2' onClick={() =>showProject(Project)}>Demo</button>
                    <button className=' rounded-md font-medium my-2 md:my-6 px-6 py-3 text-blue-700 text-bold hover:bg-blue-700 hover:text-white'>Github</button>
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
