// import React, { useEffect } from 'react';
import {Projects} from '../data/data'

const ScrollList = () => {
    // useEffect(() => {
    //     const container = document.getElementById('scrollContainer');
    //     const handleScroll = () => {
    //       // Your logic here if needed
    //     };
    //     container.addEventListener('scroll', handleScroll);
    //     return () => {
    //       container.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    const scrollToLeft = () => {
      const container = document.getElementById('scrollContainer');
      if (container) {
        container.scrollLeft -= 400; // Adjust the scroll speed as needed
      }
    };
  
    const scrollToRight = () => {
      const container = document.getElementById('scrollContainer');
      if (container) {
        container.scrollLeft += 400; // Adjust the scroll speed as needed
      }
    };
  
  return (
    <div>
       <div className="relative flex justify-center items-center">
      <button className="absolute left-0 top-1/2 bg-blue-400 hover:bg-blue-500 p-2 rounded-full z-10 text-white" onClick={scrollToLeft}>
        &lt;
      </button>
      <div id="scrollContainer" className="flex overflow-x-auto" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch'}}>
        {Projects.map((Project) => (
                <div key={Project.id}  className="flex-none w-full lg:w-[500px] md:w-1/2 flex flex-col justify-center items-center border border-gray-300 m-2">
                <div className='mx-auto'>
                 <img alt='/' src={Project.image} className=''/>
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
      <button className="absolute right-0 top-1/2 bg-blue-400 hover:bg-blue-500 p-2 rounded-full z-10 text-white" onClick={scrollToRight}>
        &gt;
      </button>
    </div>
    </div>
  )
}

export default ScrollList
