import React from 'react'
import { LEGEND_CONTENT } from '../constants';
import profilepicture from '../assets/profilep.png'
import { motion } from "framer-motion";

const delayContainer = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const Legend = () => {
  return (
    <div className='border-b border-neutral-500 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={delayContainer (0)}
            initial="hidden"
            animate="visible"
            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Toluwase Ajise</motion.h1>
            <motion.span 
            variants={delayContainer (0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-orange-400 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>
              Full Stack Dveloper
            </motion.span>
            <motion.p
            variants={delayContainer (1)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tighter'>{LEGEND_CONTENT}</motion.p>
          </div>
        </div>
        <div className='lg:w-1/2 lg:p-8'>
          <div className="flex justify-center">
            <motion.img
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            src={profilepicture}
            alt='profile-p' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legend;