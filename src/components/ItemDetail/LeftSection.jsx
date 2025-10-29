import { useMemo } from "react"
import { ITEMS_DATA } from "../../configs/Items.config"
import { useParams } from "react-router"
import ReservationSchedule from "./ReservationSchedule"
import SubmitButton from "../Shared/SubmitButton"
import useItemDetail from "../../hooks/useItemDetail"

const LeftSection = () => {
  const {selectedSchedule, selectedItem, toggleConfirmation} = useItemDetail()

  const isTheTimeSelectionDone = selectedSchedule.date !== null && selectedSchedule.outTime !== null

  return (
    <div>
      <div className="bg-white shadow-md rounded-2xl p-4">
        <div className="bg-gray-200 w-full center h-50 p-10 relative rounded-xl">
          <img className="object-cover z-10 drop-shadow-2xl drop-shadow-greem-800" src={selectedItem?.imgUrl} alt={selectedItem?.codeName} />
        </div>
        <div className="px-2 py-2 space-y-2 text-black-text text-sm">
          <h1 className="font-semibold">ITEM DETAILS</h1>
          <h2 className="text-xl font-semibold capitalize">{selectedItem.codeName}</h2>
          {selectedItem.model && <p>Model: {selectedItem.model}</p>}
          {selectedItem.connection && <p>Applicable Connection: {selectedItem.connection}</p>}
          <p>Pickup Location: {selectedItem.location}</p>
        </div>
        <ReservationSchedule/>
        <SubmitButton
          disabled={!isTheTimeSelectionDone}
          onClick={toggleConfirmation}
        >
          Confirm Selected Schedule
        </SubmitButton>
      </div>
    </div>
  )
}
export default LeftSection