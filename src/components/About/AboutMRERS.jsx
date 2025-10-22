import AboutButtons from './ABoutButtons'

export default function AboutMRERS() {
  return (
    <main>
      
      <div className='flex flex-col gap-3 mt-2 text-m'>
        <p className='text-white font-semibold text-sm bg-green-gradient inline-block px-2 py-1 rounded-lg w-max'>ABOUT MRERS</p>
        <p className='font-bold text-4xl'>Simplifying reservations, maximizing resources.</p>
        <p className='text-justify text-sm'>The MIS Room and Equipment Reservation System (MRERS) is a web-based platform that streamlines the booking of classrooms and MIS-managed equipment at the University of Caloocan City - North Campus. Built using the MERN Stack, it provides real-time availability, digital request submission, and centralized management for administrators—making reservations faster, more accurate, and conflict-free.</p>

        <AboutButtons/>
      </div>
    </main>
  )
}
