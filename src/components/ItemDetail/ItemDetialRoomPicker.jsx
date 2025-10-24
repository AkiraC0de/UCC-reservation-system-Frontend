import { ROOM_RESERVATION_DAY_AVAILABLE } from "../../configs/Room.config"
import DatePicker from "../Shared/DatePicker"

const ItemDetialRoomPicker = () => {
  const { min, max } = ROOM_RESERVATION_DAY_AVAILABLE  
  const today = new Date()
        
  const minDay = new Date(today)
  minDay.setDate(today.getDate() + min)

  const maxDay = new Date(today);
  maxDay.setDate(today.getDate() + max)

  return (
    <DatePicker
      minDate={minDay}
      maxDate={maxDay}
    />
  )
}
export default ItemDetialRoomPicker