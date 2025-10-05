import { Link } from 'react-router';

export default function VisionAndMission() {
  const titleStyles = `xl:text-3xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold mb-4 text-green-700`;
  const subtitleStyles = `xl:text-lg md:text-2xl sm:text-xl text-lg font-semibold text-green-600`;
  const descriptionStyles = `xl:text-sm md:text-md sm:text-md text-sm text-gray-700 leading-relaxed text-justify`;

  return (
    <div className='flex justify-center bg-gray-50 p-6 transition-all duration-500'>
      <div className="max-w-3xl flex flex-col p-10 gap-6 border border-green-300 shadow-lg rounded-2xl bg-white">
        
        <div>
          <Link to="/about">
            <div className='flex items-center gap-3 text-green-700 hover:text-green-900 transition'>
              <p>←</p>
              <p className='font-md'>Back to About</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2">
            <p className={`${titleStyles} `}>Vision & Mission</p>
        </div>

        <div className='flex flex-col gap-3'>
          <p className={subtitleStyles}>Vision</p>
          <p className={descriptionStyles}>
            To create a modern, reliable, and accessible reservation system that empowers the University of Caloocan City - North Campus to maximize its resources efficiently while promoting a culture of organization, accountability, and technological advancement.
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <p className={subtitleStyles}>Mission</p>
          <ul className={`${descriptionStyles} list-disc pl-6 space-y-2`}>
            <li>To simplify the reservation process for rooms and equipment through a user-friendly web application.</li>
            <li>To provide accurate real-time information on resource availability, reducing conflicts and overlaps in scheduling.</li>
            <li>To support MIS administrators with tools for efficient approval, monitoring, and inventory management.</li>
            <li>To lay the foundation for future innovations in automated notifications, QR code check-ins, and campus-wide scalability.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
