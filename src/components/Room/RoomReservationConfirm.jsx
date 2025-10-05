import { useMemo } from "react"
import useRoom from "../../hooks/useRoom"
import ConfirmIcon from "../Shared/Icons/ConfirmIcon"
import { convertDateFormat } from "../../Utils/utils"
import { TIME_SLOTS_30_MIN } from "../../configs/Room.config"
import Input from "../Shared/Input"
import CancelIcon from "../Shared/Icons/CancelIcon"
import { SyncLoader } from "react-spinners"

const RoomReservationConfirm = () => {
  const {isLoading} = useRoom()
  return (
    <div className="bg-black/40 absolute top-0 bottom-0 left-0 right-0 z-200 center duration-300">
      {isLoading ? <SyncLoader color="green" size={6}/> : <Form/>}
    </div>
  )
}

const Form = () => {
  const {reservation : {room, date, purpose}, isRequired, handleIsRequired, handleSendReservation, handleReservationPurpose, handleSchedule, selectedTime} = useRoom()
  const formatedDate = useMemo(() => {
    return convertDateFormat(date)
  }, [date])

  const handlePurpose = (e) => {
    handleReservationPurpose(e.target.value)
  }

  const handleCancel = () => {
    handleSchedule(prev => ({...prev, isConfirmed: false}))
    handleIsRequired(prev => ({...prev, purpose: false}))
  }

  return(
  <div className="bg-white w-80 p-6 rounded-lg flex flex-col gap-6 anim-scale ">
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
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h3 className="bg-green-500 text-white px-2 py-0.5 rounded-xl text-xs">Start </h3>
              {TIME_SLOTS_30_MIN[selectedTime.startingTime]}
            </div>
            <div className="flex gap-2">
              <h3 className="bg-green-700 text-white px-2 py-0.5 rounded-xl text-xs">Out </h3>
              {TIME_SLOTS_30_MIN[selectedTime.outTime + 1]}
            </div>
          </div>
          <div className="w-14 mx-5 aspect-square bg-green-600 text-white rounded-full leading-3 center flex-col">
            <span className="text-[18px] font-semibold">{(selectedTime.outTime - selectedTime.startingTime + 1) / 2}</span>
            <span className="text-[10px]">Hour/s</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <h2 className="font-semibold text-black-text">Purpose:</h2>  
          <span className={`${isRequired.purpose ? "text-red-400 anim-shake" : "text-gray-400"} text-xs`}>* required</span>
        </div>
        <Input
          placeholder="Enter a valid purpose. Ex: Lecture"
          value={purpose}
          onChange={handlePurpose}
        />
      </div>

      <p className="text-xs italic text-gray-500">Note: Some account details will be included in the reservation request for admin review.</p>

      <div className="flex gap-2">
        <button 
          onClick={handleCancel}
          className="p-2 w-10 rounded-lg bg-red-400 fill-white hover:scale-110 transition-all duration-300 cursor-pointer">
          <CancelIcon/>
        </button>
        <button 
          onClick={handleSendReservation}
          className="flex-1 bg-green-500 text-white font-semibold rounded-lg cursor-pointer hover:scale-104 transition-all duration-300">
          Submit Reservation
        </button>
      </div> 

    </div>
  </div>
)}

export default RoomReservationConfirm