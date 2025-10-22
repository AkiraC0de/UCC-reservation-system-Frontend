import React from 'react'
import Vision from './Vision'


export default function VisionSection() {
  return (
    <div className="grid grid-cols-2 gap-30 py-15">
        <div className='bg-green-gradient-opaque rounded-xl p-2 w-max h-max'>
          <img  
          src="/about-page-images/visionimg.svg"
          alt="About MRERS illustration"
          width={600}
          className='ml-10 '
          height={300}
          />
        </div>
        <Vision/>
    </div>
  )
}
