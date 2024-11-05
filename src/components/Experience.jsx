import React from 'react'
import { EXPERIENCES } from '../constants/index';

const Experience = () => {
  return (
    <div className='border-b border-neutral-300 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        Experience
      </h1>
      <div>
        {EXPERIENCES.map((experince, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg;justify-center '>
                <div className='w-full lg:1/4 '>
                    {experince.year}
                </div>
            </div>
        ))}
      </div>
        </div>
  )
}

export default Experience;