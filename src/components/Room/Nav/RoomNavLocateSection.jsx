import useRoom from "../../../hooks/useRoom"
import Select from "../../Shared/Select"
import BuildingIcon from "../../Shared/Icons/BuildingIcon"

const RoomNavLocateSection = () => {

  const {building, handleBuilding, isNavOpen, HandleNavOpen, floor, handleFloor} = useRoom()

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm px-2 text-black-text">Locate your room</h2>
        <div className="flex justify-start items-start gap-4">
            <Select 
              label="Building"
              placeholder="Select"
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
            <Select 
              label="Floor"
              Icon={BuildingIcon}
              value={floor}
              handleValue={handleFloor}
              options={[
                {label: "1st Floor", value: 1},
                {label: "2nd Floor", value: 2},
                {label: "3rd Floor", value: 2},
                {label: "4th Floor", value: 2},
              ]}
            />
        </div>
    </div>
  )
}
export default RoomNavLocateSection