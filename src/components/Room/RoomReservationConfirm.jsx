import { useMemo } from "react"
import useRoom from "../../hooks/useRoom"
import ConfirmIcon from "../Shared/Icons/ConfirmIcon"
import { convertDateFormat } from "../../Utils/utils"
import { TIME_SLOTS_30_MIN } from "../../configs/Room.config"
import Input from "../Shared/Input"
import PrimaryButton from "../Shared/PrimaryButton"
import CancelIcon from "../Shared/Icons/CancelIcon"

const RoomReservationConfirm = () => {
  const {reservation : {room, date, purpose}, handleReservationPurpose,  selectedTime} = useRoom()

  const formatedDate = useMemo(() => {
    return convertDateFormat(date)
  }, [date])

  const handlePurpose = (e) => {
    handleReservationPurpose(e.target.value)
  }

  return (
    <div className="bg-black/40 absolute top-0 bottom-0 left-0 right-0 z-200 center">
      <div className="bg-white w-80 p-6 rounded-lg flex flex-col gap-6">
        <div className="flex justify-start items-center gap-4">
          <ConfirmIcon className="w-10 fill-green-500"/>
          <div className="flex flex-col ">
            <h1 className="text-green-600 font-semibold leading-3">Reservation Confirmation</h1>
            <h2 className="text-black-text font-bold text-sm">• Room {room}</h2> 
          </div>
        </div>
        <div className="flex flex-col text-sm gap-4">

          <div>
            <h2 className="font-semibold text-black-text">Date: </h2>
            {formatedDate}
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-black-text">Time: </h2>
            <div className="flex gap-2">
              <h3 className="bg-blue-500 text-white px-2 py-0.5 rounded-xl text-xs">Start </h3>
              {TIME_SLOTS_30_MIN[selectedTime.startingTime]}
            </div>
            <div className="flex gap-2">
              <h3 className="bg-blue-700 text-white px-2 py-0.5 rounded-xl text-xs">Out </h3>
              {TIME_SLOTS_30_MIN[selectedTime.outTime]}
            </div>
            <div className="flex gap-2">
              <h3 className="bg-green-500 text-white px-2 py-0.5 rounded-xl text-xs">Duration </h3>
              {(selectedTime.outTime - selectedTime.startingTime + 1) / 2} Hour/s
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-black-text">Purpose: </h2>
            <Input
              placeholder="Enter a valid purpose. Ex: Lecture"
              value={purpose}
              onChange={handlePurpose}
            />
          </div>

          <div className="flex gap-2">
            <button className="p-2 w-10 rounded-lg bg-red-500 fill-white">
              <CancelIcon/>
            </button>
            <PrimaryButton className="flex-1">
              Submit Reservation
            </PrimaryButton>
          </div> 

        </div>
      </div>
    </div>
  )
}
export default RoomReservationConfirm