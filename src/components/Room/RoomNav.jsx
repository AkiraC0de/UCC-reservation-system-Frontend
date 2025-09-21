import useRoom from "../../hooks/useRoom"
import BuildingIcon from "../Shared/Icons/BuildingIcon"
import Option from "../Shared/Option"
import Select from "../Shared/Select"
import RoomControl from "./RoomControl"
import RoomFloorNav from "./RoomFloorNav"
import RoomHeaderStages from "./RoomHeaderStages"
import RoomNavHeader from "./RoomNavHeader"

const RoomNav = () => {
  const {building, handleBuilding, isNavOpen, HandleNavOpen} = useRoom()

  return (
    <div className="z-100">
      <div className=" bg-white p-4 rounded-2xl shadow-md flex flex-col gap-4">
        <RoomNavHeader/>
        <RoomHeaderStages/>
        <Select 
          label="Select a Building"
          Icon={BuildingIcon}
          value={building}
          handleValue={handleBuilding}
          shrink={!isNavOpen}
          shrinkHandler={HandleNavOpen}
          options={[
            {label: "Left Wing"},
            {label: "Right Wing"},
          ]}
        />
        <RoomFloorNav/>
      </div>
    </div>
  )
}
export default RoomNav