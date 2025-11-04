import Mission from './Mission'

export default function MissionSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-6 items-center">
      <Mission/>
      <div className=" order-2 lg:order-1 flex justify-center md:justify-center xl:justify-start">
       <div className='bg-green-gradient-opaque rounded-xl p-3 w-full max-w-md sm:max-w-lg lg:max-w-xl'>
        <img  
        src="/about-page-images/missionimg.svg"
        alt="About MRERS illustration"
        className='w-full h-auto rounded-lg object-contain'
        />
        </div>
      </div>
    </div>
  )
}
