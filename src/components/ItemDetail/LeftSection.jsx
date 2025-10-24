import { useMemo } from "react"
import { ITEMS_DATA } from "../../configs/Items.config"
import { useParams } from "react-router"
import ReservationSchedule from "./ReservationSchedule"

const LeftSection = () => {
  const { type, id } = useParams()
  const selectedItem = useMemo(() => ITEMS_DATA.find(item => item.id == id))
  const buttonClasses = `
    relative shadow-md border-2 border-[#9fcc56] 
    text-green-700 text-sm font-semibold py-3 px-4 rounded-lg mt-2
    transition-all duration-300 ease-in-out w-full
    hover:text-white hover:scale-105 hover:shadow-lg
    hover:bg-gradient-to-r hover:from-green-500 hover:to-lime-400
  `
  return (
    <div className="overflow-hidden">
      <div className="bg-white shadow-md rounded-2xl p-4">
        <div className="bg-gray-200 w-full center h-50 p-10 relative rounded-xl">
          <img className="object-cover z-10 drop-shadow-2xl drop-shadow-greem-800" src={selectedItem.imgUrl} alt={selectedItem.codeName} />
        </div>
        <div className="px-2 py-2 space-y-2 text-black-text text-sm">
          <h1 className="font-semibold">ITEM DETAILS</h1>
          <h2 className="text-xl font-semibold capitalize">{selectedItem.codeName}</h2>
          {selectedItem.model && <p>Model: {selectedItem.model}</p>}
          {selectedItem.connection && <p>Applicable Connection: {selectedItem.connection}</p>}
          <p>Pickup Location: {selectedItem.location}</p>
        </div>
        <ReservationSchedule/>
        <button className={buttonClasses}>
          Submit Reservation
        </button>
      </div>
    </div>
  )
}
export default LeftSection