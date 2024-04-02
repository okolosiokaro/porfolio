import React from 'react'
import { AiFillContacts } from 'react-icons/ai'

const Contact = () => {
  return (
    <div>
         <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
      <div className='flex gap-2 mb-6'>
            <AiFillContacts  size={25} className='mt-1 '/>
            <div>
            <h3 className=" font-bold mb-4 text-2xl">Contact</h3>
            <p>Get in touch via social media or fill the form below</p>
            </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div>
            
          </div>
          <div className='flex flex-col justify-center'> 
          <form >
              <div class="">
                  <div class="">
                    <input type="text" class=" p-4" placeholder="Your Name" />
                  </div>
                  <div class="">
                     <input type="email" class=" p-4" placeholder="Your Email"/>
                  </div>
              </div>
              <div class="">
                    <input type="text" class=" p-4" placeholder="Subject"/>
              </div>
              <div class="">
                    <textarea class=" py-3 px-4" rows="5" placeholder="Message"></textarea>
              </div>
              <div>
                  <button class="" type="submit" >Send Message</button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
