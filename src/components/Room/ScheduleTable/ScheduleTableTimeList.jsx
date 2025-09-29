import { TIME_SLOTS } from "../../../configs/Room.config"
import ScheduleTableTimeLabel from "./ScheduleTableTimeLabel"

const ScheduleTableTimeList = () => {
  return (
     <div className="grid grid-rows-15 ">
      {TIME_SLOTS.map((time, index) => (
        <ScheduleTableTimeLabel 
          key={index}
          time={time}
        />
      ))}
    </div>
  )
}
export default ScheduleTableTimeList