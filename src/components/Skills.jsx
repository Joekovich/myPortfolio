import React from 'react'
import HTML from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/js.png'
import Mysql from '../assets/mysql.png'
import ReactImg from '../assets/react.png'
import Python from '../assets/python.png'
import Figma from '../assets/figma.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'
import PHP from '../assets/file.png'


const Skills = () => {
  return (
    // btw Screen/Full property which is better??
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-between w-full h-full">
        <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#8158f3]">Skills</p>
            <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid=cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="html icon" />
                <p>HTML</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Css} alt="css icon" />
                <p>CSS</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Javascript} alt="javascript icon" />
                <p>Javascript</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Mysql} alt="mysql icon" />
                <p>Mysql</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
                <p>React</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Python} alt="python icon" />
                <p>Python</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Figma} alt="figma icon" />
                <p>Figma</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
                <p>Tailwind</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
                <img className="w-20 mx-auto" src={Github} alt="github icon" />
                <p>Github</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
                <img className="w-20 mx-auto" src={PHP} alt="php icon" />
                <p>PHP</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
