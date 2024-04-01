import React from 'react'

const Skill = () => {
  return (
     <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
      <div className='flex flex-col justify-center'> 
        <div className='mb-6'>
            <h3 className=" font-bold mb-4 text-2xl">Skills</h3>
            <p>Technologies and tools</p>
        </div>
        <div className='grid md:grid-cols-2 gap-2'>
            <div className="bg-gray-50 rounded-lg shadow-md p-2">
                    <h3 className=" font-bold mb-4">Frontend</h3>
                    <div className="pt-2 pl-4 ml-2">

                    </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-2">
                    <h3 className=" font-bold mb-4">Backend</h3>
                    <div className="pt-2 pl-4 ml-2">

                    </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skill
