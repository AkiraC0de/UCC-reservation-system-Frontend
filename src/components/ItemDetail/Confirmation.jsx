import { useParams } from "react-router"
import useItemDetail from "../../hooks/useItemDetail"
import ConfirmIcon from "../Shared/Icons/ConfirmIcon"
import { TIME_SLOTS_30_MIN } from "../../configs/Room.config"
import { convertDateFormat } from "../../Utils/utils"
import { useMemo } from "react"
import SubmitButton from "../Shared/SubmitButton"
import CancelConfirmationButton from "./CancelConfirmationButton"
import { SyncLoader } from "react-spinners"

const Confirmation = () => {
  const {selectedSchedule, selectedItem, toggleConfirmation, handleSubmitReservation, purpose, setPurpose, isSubmitting} = useItemDetail()
  const startingTimeString = TIME_SLOTS_30_MIN[selectedSchedule.startingTime]
  const outTimeString = TIME_SLOTS_30_MIN[selectedSchedule.outTime + 1]
  const scheduleTimeDuration = (selectedSchedule.outTime - selectedSchedule.startingTime + 1) / 2
  const formatedDate = useMemo(() => {
    return convertDateFormat(selectedSchedule.date)
  }, [selectedSchedule.date])

  return (
    <div className="z-500 bg-black/40 fixed center top-0 bottom-0 right-0 left-0">
      <div className="relative bg-white text-sm gap-4 w-85 flex flex-col rounded-lg py-5 px-4 text-black-text anim-scale">
        <div className="flex flex-col items-center gap-4 mb-2">
          <ConfirmIcon className="w-10 fill-green-500 stroke-white"/>
          <h1 className="text-green-600 font-medium leading-3">Reservation Confirmation</h1>
        </div>

        <div>
          <h2 className="font-medium mb-2">Reservation details</h2>
          <div className="flex flex-col border border-gray-400 rounded-lg">
            <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
              <p>Item</p>
              <p className="capitalize">{selectedItem.type} - {selectedItem.codeName}</p>
            </div>
            <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
              <p>Date</p>
              <p>{formatedDate}</p>
            </div>
            <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
              <p>Starting Time</p>
              <p>{startingTimeString}</p>
            </div>
            <div className="py-3 px-2 border-b border-gray-400 flex justify-between">
              <p>End Time</p>
              <p>{outTimeString}</p>
            </div>
            <div className="py-3 px-2 flex justify-between">
              <p>Duration</p>
              <p>{scheduleTimeDuration} hr/s</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-medium mb-2">Purpose</h2>
          <select 
            className="w-full py-3 px-2 border rounded-lg border-gray-400 cursor-pointer focus:outline-0"
            name="purpose"
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value)
            }}
          >
            <option value="Lecture">Lecture</option>
            <option value="Presentation">Presentation</option>
            <option value="Meeting">Meeting</option>
            <option value="Defense">Defense</option>
            <option value="Exhibit">Exhibit</option>
          </select>
        </div>

        <div className="flex gap-4">
          <CancelConfirmationButton
            onClick={toggleConfirmation}
          />
          <SubmitButton
            className="flex-1"
            onClick={handleSubmitReservation}
          >
            {!isSubmitting && "Submit"}
            {<SyncLoader loading={isSubmitting} color="green" size={10}/>}
          </SubmitButton>
        </div>

      </div>
    </div>
  )
}
export default Confirmation