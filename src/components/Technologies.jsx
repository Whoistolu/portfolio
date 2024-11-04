import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-500 pb-24'>
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap  items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <RiReactjsLine className='text-7xl text-cyan-800' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <DiRuby className='text-7xl text-red-500' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <SiRubyonrails className='text-7xl text-red-500' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <IoLogoJavascript className='text-7xl text-yellow-500' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiTailwindCssFill className='text-7xl text-cyan-500'  />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <BiLogoPostgresql  className='text-7xl text-blue-400' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaBootstrap  className='text-7xl text-purple-600' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaCss3Alt  className='text-7xl text-blue-600' />
                </div>
                
            </div>
        </div>
    )
}

export default Technologies