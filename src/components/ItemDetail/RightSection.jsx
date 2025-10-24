import ScheduleTable from "../Shared/ScheduleTable/ScheduleTable"
import useItemDetail from "../../hooks/useItemDetail"


const RightSection = () => {
  const {selectedSchedule, handleSelectedSchedule} = useItemDetail()
  return (
    <div>
      <ScheduleTable scheduleData={selectedSchedule} handleScheduleData={handleSelectedSchedule}/>
    </div>
  )
}
export default RightSection