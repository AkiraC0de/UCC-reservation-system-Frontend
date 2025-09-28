import useRoom from "../../../hooks/useRoom"
import Schedule2Icon from "../../Shared/Icons/Schedule2Icon"
import RoomControl from "./RoomControl"

const RoomNavHeader = () => {
  const {isNavOpen, HandleNavOpen} = useRoom()

  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Schedule2Icon className="w-5 fill-green-500"/>
          <h1 className="text-lg font-medium transition-all duration-300 px-2 text-green-500">
            Room Reservation
          </h1>
        </div>
        <RoomControl/>
    </div>
  )
}

export default RoomNavHeader