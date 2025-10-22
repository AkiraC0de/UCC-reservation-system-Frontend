import { useState } from "react"
import ScheduleTable from "../Shared/ScheduleTable/ScheduleTable"


const RightSection = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(
    {
      startingTime: null,
      outTime: null,
      date: null
    }
  )

  const handleSelectedSchedule = (name, value) => {
    setSelectedSchedule(prev => ({...prev, [name]: value}))
  }

  return (
    <div>
      <ScheduleTable scheduleData={selectedSchedule} handleScheduleData={handleSelectedSchedule}/>
    </div>
  )
}
export default RightSection