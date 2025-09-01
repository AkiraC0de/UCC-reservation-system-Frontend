import useRoom from "../../hooks/useRoom"
import BuildingIcon from "../Shared/Icons/BuildingIcon"
import Option from "../Shared/Option"
import Select from "../Shared/Select"
import RoomControl from "./RoomControl"
import RoomNavHeader from "./RoomNavHeader"

const RoomNav = () => {
  const {building, handleBuilding, isNavOpen} = useRoom()

  return (
    <div className="z-100">
      <div className=" bg-white p-4 rounded-2xl shadow-md flex flex-col gap-4">
        <RoomNavHeader/>
        <Select 
          label="Select a Building"
          Icon={BuildingIcon}
          value={building}
          handleValue={handleBuilding}
          shrink={!isNavOpen}
          options={[
            {label: "Left Wing"},
            {label: "Right Wing"},
          ]}
        />
      </div>
    </div>
  )
}
export default RoomNav