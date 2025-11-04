import React from 'react'
import Vision from './Vision'


export default function VisionSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 items-center">
        <div className='order-2 lg:order-1 flex justify-center md:justify-center xl:justify-start'>
          <div className='bg-green-gradient-opaque rounded-xl p-3 w-full max-w-md sm:max-w-lg lg:max-w-xl'>
            <img  
            src="/about-page-images/visionimg.svg"
            alt="About MRERS illustration"
            className='w-full h-auto rounded-lg object-contain'
            />
          </div>
        </div>
        <div className='mt-5 lg:mt-0 order-1 lg:order-2'>
          <Vision/>
        </div>
    </div>
  )
}
