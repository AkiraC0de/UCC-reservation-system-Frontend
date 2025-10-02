import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config"
import useRoom from "../../../hooks/useRoom"
import RoomDatePicker from "./RoomDatePicker"


const RoomNavSchedSection = () => {
  const {selectedTime} = useRoom()
  const startingTime = TIME_SLOTS_30_MIN[selectedTime.startingTime]
  const outTime = selectedTime.outTime !== null ? TIME_SLOTS_30_MIN[selectedTime.outTime + 1] : ""
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm px-2 text-black-text">Select your Schedule</h2>
      <RoomDatePicker/>
      <div>
        <h2>{startingTime}</h2>
        <h2>{outTime}</h2>
      </div>
    </div> 
  )
}
export default RoomNavSchedSection