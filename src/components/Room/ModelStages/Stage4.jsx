import { motion } from "motion/react"
import ScheduleTable from "../ScheduleTable"
import useRoom from "../../../hooks/useRoom"

const Stage4 = () => {
  const {stage} = useRoom()
  return (
    <motion.div 
      key={stage}
      initial={{scale: 0, opacity: 0.4}}
      animate={{scale: 1, opacity: 1, }}
      transition={{duration: 0.3}}
      className="w-full">
      <ScheduleTable/>
    </motion.div>
  )
}
export default Stage4