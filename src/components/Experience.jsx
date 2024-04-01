import React from 'react'

const Experience = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2'>
            <div className="">
                    <h3 className=" font-bold mb-4 text-2xl">Education</h3>
                    <div className="border-l border-blue-500 pt-2 pl-4 ml-2">
                        <div className="relative mb-4">
                            <h5 className="font-bold mb-1">Bachelor of Engineering</h5>
                            <p className="mb-2"><strong>Federal University of Petroleum Resources</strong> | <small>2012 - 2017</small></p>
                            <p>Electrical and Electronics Engineering</p>
                        </div>
                    </div>
            </div>
            <div className="">
                    <h3 className=" font-bold mb-4 text-2xl">Expericence</h3>
                    <div className="border-l border-blue-500 pt-2 pl-4 ml-2">
                        <div className="relative mb-4">
                            <h5 className="font-bold mb-1">Web Developement</h5>
                            <p className="mb-2"><strong>Freelance</strong> | <small>2023 - Date</small></p>
                            <p>Frontend Developer</p>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
