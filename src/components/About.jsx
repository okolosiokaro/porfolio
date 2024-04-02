import React from 'react'
import pic2 from '../assets/pic2.png'
import { AiFillProfile } from 'react-icons/ai'


const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 '>
          <img className='w-2/4 rounded-full py-2 mx-auto' src={pic2} alt="personalPic"/>
          <div className='flex flex-col justify-center'> 
                    <div className='flex gap-2 mb-6'>
                        <AiFillProfile size={20} className='mt-2'/>
                         <div>
                         <h3 className=" font-bold mb-4 text-2xl">Personal Information</h3>
                         <p>Frontend Developer</p>
                         </div>
                    </div>
                 
                    <div className="w-full p-2 grid md:grid-cols-2 bg-gray-50 rounded-lg shadow-md mb-3">
                      
                        <div className="py-2"><h6>Name: <span className="font-bold ">Okolosio Oghenekaro Elvis</span></h6></div>
                        <div className="py-2"><h6>Birthday: <span className="font-bold">9 July 1994</span></h6></div>
                        <div className="py-2"><h6>Address: <span className="font-bold">49, Vaughan Str, Lagos NG</span></h6></div>
                        <div className="py-2"><h6>Phone: <span className="font-bold">+234 705 0754 245</span></h6></div>

                        <div className="py-2"><h6>Email: <span className="font-bold">okolosiokaro@gmail.com</span></h6></div>
                        <div className="py-2"><h6>Degree: <span className="font-bold">Bachelor of Engineering</span></h6></div>
                        <div className="py-2"><h6>Experience: <span className="font-bold">2 Years</span></h6></div>
                        <div className="py-2"><h6>Freelance: <span className="font-bold">Available</span></h6></div>
                    
                    </div>
                    <div className='flex'>
                    <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 px-6 py-3 text-white text-bold hover:bg-blue-700 mr-2'>Hire Me</button>
                    <button className=' w-[200px] rounded-md font-medium my-6 px-6 py-3 text-blue-700 text-bold hover:bg-blue-700 hover:text-white'>Download CV</button>
                    </div>

                </div>
            </div>
          </div>
        </div>
  )
}

export default About
