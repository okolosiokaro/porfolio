import React from 'react'
import { AiFillProject } from 'react-icons/ai';
import ScrollList from './ScrollList';

const Built = () => {

  return (
    <div>
    <div  id='project' className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto '>
        <div className='flex gap-2 mb-6'>
            <AiFillProject  size={25} className='mt-1 '/>
            <h3 className=" font-bold mb-4 text-2xl">Projects</h3>
        </div>
        <div className='p-10 lg:p-20'>
        <ScrollList />
        </div>
        </div>
      
    </div>
   </div>
  )
}

export default Built
