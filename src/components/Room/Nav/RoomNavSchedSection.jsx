import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config"
import useRoom from "../../../hooks/useRoom"
import RoomDatePicker from "./RoomDatePicker"


const RoomNavSchedSection = () => {
  const {selectedTime} = useRoom()
  const startingTime = TIME_SLOTS_30_MIN[selectedTime.startingTime]
  const outTime = selectedTime.outTime !== null ? TIME_SLOTS_30_MIN[selectedTime.outTime + 1] : ""
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-sm px-2 text-gray-500 italic">Select your Schedule & Time</h2>
        <h3 className="text-xs px-2 leading-4 text-gray-500 italic">• Reservations can only be made up to one week in advance.</h3>
        <h3 className="text-xs px-2 leading-4 text-gray-500 italic">• Please use the table to select your prefered time</h3>
      </div>
      <div className="flex gap-4">
        <RoomDatePicker/>
        <div className="flex gap-1 flex-1 text-sm relative text-black-text px-4 rounded-lg py-3 border border-gray-500 w-fit">
          <h2>{startingTime || "00:00"}</h2>
          <span>-</span>
          <h2>{outTime || "00:00"}</h2>
          <h1 className="absolute -top-2 px-2 bg-white text-gray-400 text-xs">Time</h1>
        </div>
      </div>
    </div> 
  )
}
export default RoomNavSchedSection