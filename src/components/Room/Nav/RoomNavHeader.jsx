import useRoom from "../../../hooks/useRoom"
import RoomControl from "./RoomControl"

const RoomNavHeader = () => {
    const {isNavOpen, HandleNavOpen} = useRoom()

  return (
    <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold transition-all duration-300 text-green-500">
          Navigation
        </h1>
        <RoomControl/>
    </div>
  )
}
export default RoomNavHeader