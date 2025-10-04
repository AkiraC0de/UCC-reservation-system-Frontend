import { motion } from "motion/react"
import ScheduleTable from "../ScheduleTable/ScheduleTable"
import useRoom from "../../../hooks/useRoom"

const Stage4 = () => {
  const {stage} = useRoom()
  return (
    <div 
      className="w-full anim-scale">
      <ScheduleTable/>
    </div>
  )
}
export default Stage4