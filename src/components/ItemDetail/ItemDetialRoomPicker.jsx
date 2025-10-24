import { ROOM_RESERVATION_DAY_AVAILABLE } from "../../configs/Room.config"
import useItemDetail from "../../hooks/useItemDetail"
import DatePicker from "../Shared/DatePicker"
import { formatDate } from "../../Utils/utils"

const ItemDetialRoomPicker = () => {
  const { min, max } = ROOM_RESERVATION_DAY_AVAILABLE  
  const {selectedSchedule, handleSelectedSchedule} = useItemDetail()
  const today = new Date()

  const minDay = new Date(today)
  minDay.setDate(today.getDate() + min)

  const maxDay = new Date(today);
  maxDay.setDate(today.getDate() + max)

  const onChange = (e) => {
    handleSelectedSchedule("date", e.target.value)
  }

  return (
    <DatePicker
      minDate={formatDate(minDay)}
      maxDate={formatDate(maxDay)}
      value={selectedSchedule.date}
      onChange={onChange}
    />
  )
}
export default ItemDetialRoomPicker