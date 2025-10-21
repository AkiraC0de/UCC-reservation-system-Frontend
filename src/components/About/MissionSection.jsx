import React from 'react'
import LeftSection from './RightSection'
import Mission from './Mission'

export default function MissionSection() {
  return (
    <div className="grid grid-cols-2 gap-30 py-15">
      <Mission/>
       <div className='bg-green-300/40 rounded-xl p-2'>
        <img  
        src="/about-page-images/missionimg.svg"
        alt="About MRERS illustration"
        width={600}
        className='ml-10'
        height={300}
        />
        </div>
        
        
    </div>
  )
}
