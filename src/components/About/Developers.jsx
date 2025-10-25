import React from 'react'
import Bebania from '/about-page-images/Team/Bebania.png'
import Fernandez from '/about-page-images/DevPlaceholderImage.png'
import Sabiniano from '/about-page-images/Team/Sabiniano.png'
import Sembrero from '/about-page-images/Team/Sembrero.png'

export default function Developers() {

  const devContainer = `bg-green-gradient-opaque px-2 rounded-lg mb-4`

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
      <div className='flex flex-col gap-3 justify-center items-center py-20'>
      <p className='text-white font-semibold text-sm bg-green-gradient inline-block px-2 py-1 rounded-lg w-max'> OUR TEAM</p>
      <p className='font-bold text-4xl mb-10'>Meet The Team Behind MRERS Innovation</p>
      <div className='flex gap-10 '>
          {devs.map((dev)=>{
            return (   
              <div className='flex flex-col'>
              <div className={devContainer}>
                  <img
                  src={images[dev.surname]}
                  alt={dev.surname}
                  width={600}
                  height={300}
                  />
              </div>
                <div>
                  <p className='font-bold'>{dev.fullname}</p>
                  <p>{dev.role}</p>
                </div>
              </div>
              );
            })}
      </div>
      </div>
    </>
  )
}
