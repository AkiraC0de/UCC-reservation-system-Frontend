import Select from "../Shared/Select"
import RoomNavHeader from "./RoomNavHeader"

const RoomNav = () => {
  return (
    <div className="z-100">
      <div className=" bg-white p-4 rounded-2xl shadow-md flex flex-col gap-2">
        <RoomNavHeader/>
        <Select label="Select a Building">

        </Select>
      </div>
    </div>
  )
}
export default RoomNav