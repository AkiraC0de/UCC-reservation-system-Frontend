import DatePicker from "../../Shared/DatePicker"
import { formatDate } from "../../../Utils/utils"
import useRoom from "../../../hooks/useRoom"

const RoomDatePicker = () => {
  const {stage, selectedSchedule, handleSelectedSchedule} = useRoom()
  const today = new Date()
        
  const minDay = new Date(today)
  minDay.setDate(today.getDate() + 1)

  const maxDay = new Date(today);
  maxDay.setDate(today.getDate() + 7)
  
  return (
    <DatePicker
      minDate={formatDate(minDay)}
      maxDate={formatDate(maxDay)}
      disabled={stage < 4}
      value={selectedSchedule.date}
      onChange={(e) => handleSelectedSchedule("date", e.target.value)}
    />
  )
}
export default RoomDatePicker