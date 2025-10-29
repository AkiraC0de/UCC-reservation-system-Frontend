import ScheduleTable from "../Shared/ScheduleTable/ScheduleTable"
import useItemDetail from "../../hooks/useItemDetail"


const RightSection = () => {
  const {selectedSchedule, handleSelectedSchedule, recievedScheduleData} = useItemDetail()
  return (
    <div>
      <ScheduleTable scheduleData={selectedSchedule} handleScheduleData={handleSelectedSchedule} recievedScheduleData={recievedScheduleData}/>
    </div>
  )
}
export default RightSection