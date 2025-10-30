import RoomHeaderStages from "./RoomHeaderStages"
import RoomNavLocateSection from "./RoomNavLocateSection"
import RoomNavHeader from "./RoomNavHeader"
import RoomNavSchedSection from "./RoomNavSchedSection"
import SubmitButton from "../../Shared/SubmitButton"
import useRoom from "../../../hooks/useRoom"

const RoomNav = () => {
  const { selectedSchedule, toggleConfirmation } = useRoom()
  const isOutTimeSelected = selectedSchedule.outTime != null

  const handleConfirmButton = () => {
    toggleConfirmation()
  }

  return (
    <div className="z-100">
      <div className=" bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 min-h-130">
        <RoomNavHeader/>
        <RoomHeaderStages/>
        <div className="flex flex-col gap-2">
          <RoomNavLocateSection/>
          <RoomNavSchedSection/>
          <SubmitButton
            disabled={!isOutTimeSelected}
            onClick={handleConfirmButton}
          >
            Confirm Selected Schedule
          </SubmitButton>
        </div>
      </div>
    </div>
  )
}
export default RoomNav