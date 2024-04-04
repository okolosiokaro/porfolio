import React from 'react'
import { AiFillContacts } from 'react-icons/ai'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsappSquare
} from 'react-icons/fa'

const Contact = () => {
  return (
         <div id='contact' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[500px]  mx-auto'>
      <div className='flex gap-2 mb-6 '>
        <AiFillContacts  size={25} className='mt-1 '/>
        <div>
          <h3 className=" font-bold mb-4 text-2xl">Contact</h3>
          <p>Connect with me on social media</p>
        </div>
        </div>
        <div className='flex justify-between  border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer'>
            <FaFacebookSquare size={30} className=' hover:text-blue-700'/>
            <FaTwitterSquare size={30} className=' hover:text-blue-700'/>
            <FaInstagram size={30} className=' hover:text-blue-700'/>
            <FaWhatsappSquare size={30} className=' hover:text-blue-700'/>
            <FaGithubSquare size={30} className=' hover:text-blue-700'/>
            <FaLinkedin size={30} className=' hover:text-blue-700'/>
          </div>
        </div>
      </div>
  )
}

export default Contact
