import React from 'react'
import Bebania from '/about-page-images/Team/Bebania.png'
import Fernandez from '/about-page-images/DevPlaceholderImage.png'
import Sabiniano from '/about-page-images/Team/Sabiniano.png'
import Sembrero from '/about-page-images/Team/Sembrero.png'

export default function Developers() {

  const devContainer = `bg-green-gradient-opaque px-2 rounded-xl flex justify-center items-center shadow-md`

  const devs = [
      {id: 1,
        surname: "Bebania",
        fullname:"Jan Aryan C. Bebania",
        role:"UI Designer",
      },
      {id: 2,
        surname: "Fernandez",
        fullname:"Mcraven Akira P. Fernandez",
        role:"Project Manager/ Fullstack Developer",
      },
      {id: 3,
          surname: "Sabiniano",
          fullname:"Attila P. Sabiniano",
          role:"UI Designer",
      },
      {id: 4,
          surname: "Sembrero",
          fullname:"Mary L. Sembrero",
          role:"Frontend Developer/ Quality Assurance",
      },
    ]

    const images = {Bebania, Fernandez, Sabiniano, Sembrero}

  return (
    <>
      <div className='flex flex-col items-center py-12 px-6 sm:px-10 lg:px-2 '>
        <p className='text-white font-semibold text-sm bg-green-gradient inline-block px-2 py-1 rounded-lg w-max'> OUR TEAM</p>
        <p className='font-bold text-xl sm:text-2xl lg:text-3xl leading-snug text-center lg:text-left'>Meet The Team Behind MRERS Innovation</p>
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-10 mt-10 text-center sm:text-left '>
            {devs.map((dev)=>{
              return (   
                <div className='flex flex-col'>
                <div key={dev.id} className={devContainer}>
                    <img
                    src={images[dev.surname]}
                    alt={dev.surname}
                    className="w-full h-auto object-contain rounded-lg"
                    />
                </div>
                  <div className='mt-4'>
                    <p className='font-bold text-base sm:text-lg'>{dev.fullname}</p>
                    <p className='text-sm sm:text-base'>{dev.role}</p>
                  </div>
                </div>
                );
              })}
        </div>
      </div>
    </>
  )
}
