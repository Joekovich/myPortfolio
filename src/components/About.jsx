import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-[#8426d1]">About</p>
            </div>
            <div></div>
        </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Hi, I'm Joel, nice to meet you. Please feel free to look around.</p>
                </div>
                <div>
                    <p>
                      I'm a full satck developer specializing in designing and building,
                       with exceptional digital experience.
                        I'm focused on designing and building responsive full-stack web applications.
                    </p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
