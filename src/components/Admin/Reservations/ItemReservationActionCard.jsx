import clsx from "clsx"
import { convertDateFormat } from "../../../Utils/utils"
import { useState, useMemo } from "react"
import SubmitButton from "../../Shared/SubmitButton"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config"

const ActionCard = ({reservation, updateStatus, itemData, onClick}) => {
  const [status, setStatus] = useState(reservation.status)

  const startingTimeString = TIME_SLOTS_30_MIN[reservation.startingTime]
  const outTimeString = TIME_SLOTS_30_MIN[reservation.outTime + 1]
  const scheduleTimeDuration = (reservation.outTime - reservation.startingTime + 1) / 2
  const formatedDate = useMemo(() => {
    return convertDateFormat(reservation.date)
  }, [reservation.date])

  const pendingClasses = clsx({
    "outline-2 rounded-lg outline-green-500 text-green-600" : status === "pending"
  }, "flex-1 py-2 px-3 cursor-pointer")

  const acceptedClasses = clsx({
    "outline-2 rounded-lg outline-green-500 z-110   text-green-600" : status === "accepted"
  }, "flex-1 py-1.5 px-3 border-l-2 border-gray-400 cursor-pointer")

  const rejectedClasses = clsx({
    "outline-2 rounded-lg outline-green-500 z-110 text-green-600" : status === "rejected"
  }, "flex-1 py-1.5 px-3 border-l-2 border-gray-400 cursor-pointer")

  return (
     <div className="center fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-400">
      <div className="bg-white rounded-lg w-92 p-4">
        <h2 className='text-black-text font-medium text-sm mb-2'>Reservation details: </h2>
      
        <div className="flex flex-col border border-gray-400 rounded-lg text-sm mb-4">
          <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
            <p>Item</p>
            <p className="capitalize">{itemData.type} - {itemData.codeName}</p>
          </div>
          <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
            <p>Date</p>
            <p>{formatedDate}</p>
          </div>
          <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
            <p>Starting Time</p>
            <p>{startingTimeString}</p>
          </div>
          <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
            <p>End Time</p>
            <p>{outTimeString}</p>
          </div>
          <div className="py-3 px-2 flex justify-between">
            <p>Duration</p>
            <p>{scheduleTimeDuration} hr/s</p>
          </div>
        </div>

        <h2 className='text-black-text font-medium text-sm my-2'>Change reservation status: </h2>
      
        <div className="border-2 border-gray-300 rounded-lg flex font-semibold text-black-text text-sm">
          <button 
            className={pendingClasses}
            onClick={() => setStatus("pending")}
          >
            Pending
          </button >
          <button
           className={rejectedClasses}
            onClick={() => setStatus("rejected")}
          >
            Rejected
          </button>
          <button 
            className={acceptedClasses}
            onClick={() => setStatus("accepted")}
          > 
            Accepted
          </button>
        </div>

        <div className="flex gap-4 mt-4">
          <button 
            className="text-sm text-gray-500 font-semibold py-3 px-4 rounded-lg mt-2 flex-1 border-2 border-gray-300 cursor-pointer"
            onClick={() => {
              onClick(false)
            }}
          >
            Cancel
          </button>
          <SubmitButton 
            className="flex-1"
            onClick={() => {
              updateStatus(reservation._id, reservation, status)
              onClick(false)
            }}
          >
            Save Changes
          </SubmitButton>
        </div>

        {/* {reservation.status === 'pending' && (
          <div className="px-6 py-4 flex gap-3">
            <button
              onClick={() => updateStatus(reservation._id, reservation, 'accepted')}
              className="flex-1 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Accept
            </button>
            <button
              onClick={() => updateStatus(reservation._id, reservation, 'rejected')}
              className="flex-1 cursor-pointer border-2 border-red-500 text-red-600 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Reject
            </button>
          </div>
        )}

        {reservation.status === 'accepted' && (
          <div className="px-6 py-4 flex gap-3">
            <button
              onClick={() => updateStatus(reservation._id, reservation,'pending')}
              className="flex-1 border-2 border-yellow-500 cursor-pointer text-yellow-500 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Set to Pending
            </button>
            <button
              onClick={() => updateStatus(reservation._id, reservation,'rejected')}
              className="flex-1 cursor-pointer border-2 border-red-500 text-red-600 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Reject
            </button>
          </div>
        )}

        {reservation.status === 'rejected' && (
          <div className="px-6 py-4  flex gap-3">
            <button
              onClick={() => updateStatus(reservation._id, reservation,'pending')}
              className="flex-1 border-2 border-yellow-500 cursor-pointer text-yellow-500 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Set to Pending
            </button>
            <button
              onClick={() => updateStatus(reservation._id,reservation, 'accepted')}
              className="flex-1 bg-green-500 cursor-pointer hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        )} */}
      </div>
    </div>
  )
}
export default ActionCard