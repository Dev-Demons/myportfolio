import React from 'react'
import {resume} from "../assets"

const ResumeButton = () => {
  return (
    <a href="https://drive.google.com/file/d/1V5d3yJ76Q1Aqqa7FatkKsDQ_eTNuMR_e/view?usp=sharing" target="_blank">
    <button className=" font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition ease-in-out delay-150 bg-[#FF9800] text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#FF5722] duration-300" >
        <img src={resume} alt="resume" className="h-[24px] w-[24px]" />
       <span className="lg:block hidden">Download Resume</span> 
    </button>
    </a>
  )
}

export default ResumeButton;