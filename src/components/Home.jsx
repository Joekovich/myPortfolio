import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
      
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-300">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Joel Nkumeh</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
        <p className="text-2xl text-[#8892b0] py-4 max-w-[700px]">I'm a full stack developer specializing in designing and building,
         with exceptional digital experience. I'm focused on designing and building responsive full-stack web applications.
          <div>
            <button className="text-[#f2f2f2] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8960f8] hover:border-[#8960f8]">View work 
             <span className="group-hover:rotate-90 duration-300">
               <HiArrowNarrowRight className='ml-3'/>
             </span>
            </button>
          </div>
        </p>
      </div>

    </div>
  )
}

export default Home
