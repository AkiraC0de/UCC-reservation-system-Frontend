import React from 'react'

export default function Developers() {

  const devContainer = `bg-green-gradient-opaque px-2 rounded-lg mb-4`

  return (
    <>
      <div className='flex flex-col gap-3 justify-center items-center py-20'>
      <p className='text-white font-semibold text-sm bg-green-gradient inline-block px-2 py-1 rounded-lg w-max'> OUR TEAM</p>
      <p className='font-bold text-4xl mb-10'>Meet The Team Behind MRERS Innovation</p>
      <div className='flex gap-10 '>
          <div>
            {/*Replace placeholders with actual images of the team and insert hover effects (with deeper info about what they did for the project) */}
            <div className={devContainer}>
                <img
                src="/about-page-images/DevPlaceholderImage.png"
                alt="About MRERS illustration"
                width={600}
                height={300}
                />
            </div>
            <div>
              <p className='font-bold'>Mcraven Akira P. Fernandez</p>
              <p>Fullstack Developer</p>
            </div>
          </div>

          <div>
            <div className={devContainer}>
                <img
                src="/about-page-images/DevPlaceholderImage.png"
                alt="About MRERS illustration"
                width={600}
                height={300}
                />
            </div>
            <div>
              <p className='font-bold'>Mcraven Akira P. Fernandez</p>
              <p>Fullstack Developer</p>
            </div>
          </div>

          <div>
            <div className={devContainer}>
                <img
                src="/about-page-images/DevPlaceholderImage.png"
                alt="About MRERS illustration"
                width={600}
                height={300}
                />
            </div>
            <div>
              <p className='font-bold'>Mcraven Akira P. Fernandez</p>
              <p>Fullstack Developer</p>
            </div>
          </div>

          <div>
            <div className={devContainer}>
                <img
                src="/about-page-images/DevPlaceholderImage.png"
                alt="About MRERS illustration"
                width={600}
                height={300}
                />
            </div>
            <div>
              <p className='font-bold'>Mcraven Akira P. Fernandez</p>
              <p>Fullstack Developer</p>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}
