import { useState } from 'react';
import { TIME_SLOTS_30_MIN } from '../../../configs/Room.config';
import { convertDateFormat } from '../../../Utils/utils';
import ActionCard from './ActionCard';

// Get status badge color
const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300 capitalize';
    case 'accepted':
      return 'bg-green-100 text-green-800 border-green-300 capitalize';
    case 'rejected':
      return 'bg-red-100 text-red-800 border-red-300 capitalize';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300 ';
  }
};

const ReservationCard = ({reservation, updateStatus, index}) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (value) => {
    setClicked(value)
  }

  return (
    <div
      key={index}
      onClick={() => {
        !clicked && setClicked(true)
      }}
      className="bg-white border-2 cursor-pointer border-gray-300 rounded-lg border-l-4 border-l-green-500 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      {/* Card Header */}
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between text-black-text">
          <h3 className="text-xl font-bold ">
            {reservation.reservedBy.firstName} {reservation.reservedBy.lastName}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
              reservation.status
            )}`}
          >
            {reservation.status}
          </span>
        </div>
        <p className="text-black-text text-sm mt-1">
          {reservation.reservedBy.program} - {reservation.reservedBy.yearLevel}{reservation.reservedBy.section}
        </p>
      </div>

      {/* Card Body */}
      <div className="px-6 py-3 space-y-2 text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <div>
              <p className="text-sm text-gray-500 font-medium">Purpose</p>
              <p className="text-gray-800">{reservation.roomId} - {reservation.purpose}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
          <div>
            <p className="text-sm text-gray-500 font-medium">Duration</p>
            <p className="text-gray-800">{(reservation.outTime - reservation.startingTime + 1) / 2} hour/s</p>
          </div>
        </div>
        </div>
        

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <div>
              <p className="text-sm text-gray-500 font-medium">Time</p>
              <p className="text-gray-800">{TIME_SLOTS_30_MIN[reservation.startingTime]} - {TIME_SLOTS_30_MIN[reservation.outTime + 1]}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div>
              <p className="text-sm text-gray-500 font-medium">Date</p>
              <p className="text-gray-800">{convertDateFormat(reservation.date)}</p>
            </div>
          </div>
        </div> 
      </div>
      
      {/* Card Actions */}
      { 
        clicked && 
        <ActionCard 
          reservation={reservation} 
          updateStatus={updateStatus}
          onClick={handleClick}
        /> 
      }
    </div>
  )
}
export default ReservationCard