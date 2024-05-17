import React from 'react'
import Sneakers from '../assets/sneakers.jpg'
import Lego from '../assets/lego.dot.jpg'
import Galileo from '../assets/logistics.jpg'
import Brew from '../assets/breww.JPG'



const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#8224fc] '>Experience</p>
            <p className='py-6'>Please check out some of my previous works</p>
        </div>

          {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div
          style={{ backgroundImage: `url(${Sneakers})` }}
          classname="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className="text-2xl font-bold text-[#f2f2f2] tracking-wider">
                  React JS Application
                </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${Galileo})` }}
          classname="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className="text-2xl font-bold text-[#f2f2f2] tracking-wider">
                  React JS Application
                </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${Brew})` }}
          classname="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className="text-2xl font-bold text-[#f2f2f2] tracking-wider">
                  React JS Application
                </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${Lego})` }}
          classname="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className="text-2xl font-bold text-[#f2f2f2] tracking-wider">
                  React JS Application
                </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${Sneakers})` }}
          classname="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className="text-2xl font-bold text-[#f2f2f2] tracking-wider">
                  React JS Application
                </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${Sneakers})` }}
          classname="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className="text-2xl font-bold text-[#f2f2f2] tracking-wider">
                  React JS Application
                </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#f2f2f2] text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work
