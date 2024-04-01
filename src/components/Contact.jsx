import React from 'react'

const Contact = () => {
  return (
    <div>
         <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Contact</h1>
        <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, animi.</p>
        <div className='grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src='/' alt="/"/>
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
