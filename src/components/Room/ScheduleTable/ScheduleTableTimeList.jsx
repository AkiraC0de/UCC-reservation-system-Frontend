import { TIME_SLOTS } from "../../../configs/Room.config"
import useRoom from "../../../hooks/useRoom"
import ScheduleTableTimeLabel from "./ScheduleTableTimeLabel"

const ScheduleTableTimeList = () => {
  const {schedule, selectedTime} = useRoom()
  const isEven = schedule.cellBeingHovered % 2 == 0
  return (
     <div className="grid grid-rows-15 transition-all duration-300">
      {TIME_SLOTS.map((time, index) => {
        const isOnFocus = index * 2 === schedule.cellBeingHovered || index * 2 === schedule.cellBeingHovered - 1
        return(
          <ScheduleTableTimeLabel 
            key={index}
            time={time}
            focus={isOnFocus}
            isEven={isOnFocus && isEven}
            isAtStarting={selectedTime.startingTime === null || selectedTime.outTime}
          />
        )
      })}
    </div>
  )
}
export default ScheduleTableTimeList