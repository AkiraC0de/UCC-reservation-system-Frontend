import { motion } from "motion/react"
import ScheduleTable from "../../Shared/ScheduleTable/ScheduleTable"
import useRoom from "../../../hooks/useRoom"

const Stage4 = () => {
  const {selectedSchedule, handleSelectedSchedule} = useRoom()

  const recivedData = []
  return (
    <div 
      className="w-full anim-scale">
      <ScheduleTable 
        scheduleData={selectedSchedule} 
        handleScheduleData={handleSelectedSchedule} 
        recievedScheduleData={recivedData}
      />
    </div>
  )
}
export default Stage4