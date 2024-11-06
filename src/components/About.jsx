import React from 'react'
import aboutimage from '../assets/about.png';
import { ABOUT_TEXT } from '../constants/index';
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className='border-b border-neutral-500 '>
            <h1 className='my-20 text-center text-4xl'>
                About 
                <span className="text-neutral-400 ml-2">Me</span>
            </h1>
            <div className='flex flex-wrap'>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl w-10/12' src={aboutimage} alt='about-p' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex justify-center lg:justify-start' >
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About