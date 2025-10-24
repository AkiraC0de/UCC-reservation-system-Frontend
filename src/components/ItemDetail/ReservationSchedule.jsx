import useItemDetail from "../../hooks/useItemDetail"
import ItemDetialRoomPicker from "./ItemDetialRoomPicker"
import { TIME_SLOTS_30_MIN } from "../../configs/Room.config"

const ReservationSchedule = () => {
  const {selectedSchedule} = useItemDetail()
  console.log(TIME_SLOTS_30_MIN)
  return (
    <div className="px-2 py-2 space-y-3 text-black-text text-sm">
      <h1 className="font-semibold">RESERVATION SCHEDULE</h1>
      <div className="flex gap-2">
        <div className="flex w-90 gap-1 flex-1 text-sm relative text-black-text px-4 rounded-lg py-3 border border-gray-500 ">
          <h2 className="w-14 text-center">{TIME_SLOTS_30_MIN[selectedSchedule.startingTime] || "00:00"}</h2>
          <span>-</span>
          <h2 className="w-14 text-center">{TIME_SLOTS_30_MIN[selectedSchedule.outTime] || "00:00"}</h2>
          <h1 className="absolute -top-2 px-2 bg-white text-gray-400 text-xs">
            Time
          </h1>
        </div>
        <ItemDetialRoomPicker/>
      </div>
    </div>
  )
}
export default ReservationSchedule