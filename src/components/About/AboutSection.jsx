import React from 'react'
import AboutMRERS from './AboutMRERS'


export default function AboutSection() {
  return (
    <div className="grid grid-cols-2 gap-30 py-20">
        <div className='bg-green-gradient-opaque rounded-xl p-2 w-max h-max'>
        <img  
        src="/about-page-images/aboutMRERSimg.svg"
        alt="About MRERS illustration"
        width={600}
        height={300}
        />
        </div>
        <AboutMRERS/>
    </div>
  )
}
