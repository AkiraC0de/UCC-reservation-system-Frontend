import DatePicker from "../../Shared/DatePicker"
import { formatDate } from "../../../Utils/utils"
import useRoom from "../../../hooks/useRoom"
import { ROOM_RESERVATION_DAY_AVAILABLE } from "../../../configs/Room.config"

const RoomDatePicker = () => {
  const {stage} = useRoom()
  const { min, max } = ROOM_RESERVATION_DAY_AVAILABLE

  const today = new Date()
        
  const minDay = new Date(today)
  minDay.setDate(today.getDate() + min)

  const maxDay = new Date(today);
  maxDay.setDate(today.getDate() + max);

  return (
    <DatePicker
      minDate={formatDate(minDay)}
      maxDate={formatDate(maxDay)}
      disabled={stage < 4}
    />
  )
}
export default RoomDatePicker