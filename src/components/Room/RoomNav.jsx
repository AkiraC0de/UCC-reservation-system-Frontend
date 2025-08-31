import useRoom from "../../hooks/useRoom"
import Option from "../Shared/Option"
import Select from "../Shared/Select"
import RoomControl from "./RoomControl"
import RoomNavHeader from "./RoomNavHeader"

const RoomNav = () => {
  const {building, handleBuilding} = useRoom()

  return (
    <div className="z-100">
      <div className=" bg-white p-4 rounded-2xl shadow-md flex flex-col gap-2">
        <RoomNavHeader/>
        <RoomControl/>
        <Select 
          label="Select a Building"
          value={building}
          handleValue={handleBuilding}
          options={[
            {label: "Left Wing"},
            {label: "Right Wing"}
          ]}
        />
      </div>
    </div>
  )
}
export default RoomNav