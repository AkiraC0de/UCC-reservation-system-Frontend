import useRoom from "../../../hooks/useRoom"
import clsx from "clsx"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config"

const RoomHeader = () => {
  const {reservation : {building, floor, room}, selectedTime, handleSchedule} = useRoom()

  const isTimeSelectionComplete = selectedTime.startingTime !== null && selectedTime.outTime !== null

  const handleConfirmButton = () => {
    handleSchedule(prev => ({...prev, isConfirmed: true}))
  }

  const confirmButtonClasses = clsx({
    "bg-blue-500 text-white" : isTimeSelectionComplete,
    "bg-gray-200 text-gray-400 line-through" : !isTimeSelectionComplete,
  }, "cursor-pointer   px-3 py-1.5 text-xs rounded-xl font-medium")

  return (
    <div className="px-4 py-1 flex">
      <div>
        <h2 className="text-xs text-gray-500">
          {`Blg. ${building} > Floor${floor} > Room${room}`}
        </h2>
        <h1 className="font-medium">
          <span className="text-green-500">ROOM {room}</span> 
          Available Schedule
        </h1>
      </div>
      <div className="flex p-1 flex-1 justify-end gap-4">
        <div className="text-black-text text-xs">
          <h1>Starting Time: {selectedTime.startingTime !== null ? TIME_SLOTS_30_MIN[selectedTime.startingTime] : "00:00"}</h1>
          <h1>Out Time: {selectedTime.outTime !== null ? TIME_SLOTS_30_MIN[selectedTime.outTime + 1] : "00:00"}</h1>
        </div>
        <button 
            onClick={handleConfirmButton}
            className={confirmButtonClasses}
          >
              Confirm Selected Time
          </button>
      </div>
    </div>
  )
}
export default RoomHeader