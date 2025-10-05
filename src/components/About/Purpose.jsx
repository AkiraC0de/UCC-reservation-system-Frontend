import { Link } from 'react-router';

export default function Purpose() {
  const titleStyles = `xl:text-3xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold mb-4 text-green-700`;
  const subtitleStyles = `xl:text-lg md:text-2xl sm:text-xl text-lg font-semibold text-green-600`;
  const descriptionStyles = `xl:text-sm md:text-md sm:text-md text-sm text-gray-700 leading-relaxed text-justify`;

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl flex flex-col p-10 gap-6 border border-green-300 shadow-lg rounded-2xl bg-white">
        
        <div>
          <Link to="/about">
            <div className="flex items-center gap-3 text-green-700 hover:text-green-900 transition">
                <p>←</p>
              <p className="font-medium text-sm">Back to About</p>
            </div>
          </Link>
        </div>

        <div>
          <p className={titleStyles}>Purpose</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className={descriptionStyles}>
            The purpose of the <strong>Management Information System Room and Equipment Reservation System (MRERS)</strong> 
            is to modernize the reservation of classrooms and MIS-managed equipment. 
            Manual, paper-based processes often lead to delays, errors, and scheduling conflicts. 
            MRERS provides a reliable digital platform that improves efficiency, accuracy, and accessibility 
            while supporting the operational needs of the University of Caloocan City – North Campus.
          </p>

          <p className={descriptionStyles}>
            The system enables faculty, staff, and students to make reservations with real-time availability, 
            while administrators gain a centralized tool for approvals, monitoring, and planning. 
            Designed to be scalable, MRERS also prepares for future enhancements such as automated notifications, 
            QR code check-ins, and cross-campus integration.
          </p>

          <p className={`${subtitleStyles} mt-2`}>In summary, MRERS seeks to:</p>

          <ul className={`${descriptionStyles} list-disc pl-6 space-y-2`}>
            <li>Reduce delays and inefficiencies caused by manual processes.</li>
            <li>Prevent double bookings through real-time availability tracking.</li>
            <li>Provide MIS staff with a centralized platform for monitoring and approvals.</li>
            <li>Maintain a reservation history for better planning and resource maintenance.</li>
            <li>Offer a scalable solution that can support advanced features in the future.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
