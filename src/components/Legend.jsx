import React from 'react'
import { LEGEND_CONTENT } from '../constants';
import profilepicture from '../assets/profilep.png'

const Legend = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Toluwase Ajise</h1>
            <span className='bg-gradient-to-r from-orange-400 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>
              Full Stack Dveloper
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{LEGEND_CONTENT}</p>
          </div>
        </div>
        <div className='lg:w-1/2 lg:p-8'>
          <div className="flex justify-center">
            <img src={profilepicture} alt='profile-p' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legend;