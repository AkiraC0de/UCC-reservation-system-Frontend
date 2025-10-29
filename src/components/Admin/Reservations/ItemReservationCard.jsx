import { useMemo, useState } from 'react';
import { TIME_SLOTS_30_MIN } from '../../../configs/Room.config';
import { convertDateFormat } from '../../../Utils/utils';
import ItemReservationActionCard from './ItemReservationActionCard';
import { ITEMS_DATA } from '../../../configs/Items.config';

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
  const itemData = useMemo(() => {
    return ITEMS_DATA.find(item => item.id == reservation.itemId)
  }, [])
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
      <div className="px-6 flex py-3 text-sm justify-between">
        <img className="w-30 center" src={itemData.imgUrl} alt={itemData.codeName} />
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col items-start gap-1">
            <p className="text-sm text-gray-500 font-medium">Purpose</p>
            <p className="text-gray-800">{reservation.purpose}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-gray-500 font-medium">Duration</p>
            <p className="text-gray-800">{(reservation.outTime - reservation.startingTime + 1) / 2} hour/s</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
          <div className="flex flex-col items-start gap-1">
            <p className="text-sm text-gray-500 font-medium">Time</p>
            <p className="text-gray-800">{TIME_SLOTS_30_MIN[reservation.startingTime]} - {TIME_SLOTS_30_MIN[reservation.outTime + 1]}</p>
            </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-gray-500 font-medium">Date</p>
            <p className="text-gray-800">{convertDateFormat(reservation.date)}</p>
        </div>
      </div>
      
      
      {/* Card Actions */}
      { 
        clicked && 
        <ItemReservationActionCard 
          reservation={reservation} 
          updateStatus={updateStatus}
          itemData={itemData}
          onClick={handleClick}
        /> 
      }
    </div>
    </div>
  )
}
export default ReservationCard