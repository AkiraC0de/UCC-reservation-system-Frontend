import useRoom from "../../../hooks/useRoom"
import Select from "../../Shared/Select"
import BuildingIcon from "../../Shared/Icons/BuildingIcon"
import { useState } from "react"

const RoomNavLocateSection = () => {

  const {stage, building, handleBuilding, isNavOpen, HandleNavOpen, floor, handleFloor} = useRoom()

  const [isRequired, setIsRequired] = useState({
    building: false
  })

  const handleIsRequired = (input, value) => {
    setIsRequired(prev => (
      {
        ...prev,
        [input]: value === undefined ? !prev[input] : value
      }
    ))
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm px-2 text-black-text">Locate your room</h2>
        <div className="flex justify-between items-start gap-2">
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
              isRequired={isRequired.building}
              handleRequiredTurnOff={() => handleIsRequired("building", false)}
            />
            <Select 
              label="Floor"
              unlock={building}
              Icon={BuildingIcon}
              value={floor}
              handleValue={handleFloor}
              options={[
                {label: "1st Floor", value: 1},
                {label: "2nd Floor", value: 2},
                {label: "3rd Floor", value: 2},
                {label: "4th Floor", value: 2},
              ]}
              handleLock={() => handleIsRequired("building", true)}
            />
            <Select 
              label="Room"
              unlock={building}
              Icon={BuildingIcon}
              value={"Test"}
              handleValue={handleFloor}
              options={[
                {label: "301", value: 1},
                {label: "302", value: 2},
                {label: "3rd Floor", value: 2},
                {label: "4th Floor", value: 2},
                {label: "4th2 Floor", value: 2},
              ]}
              handleLock={() => handleIsRequired("building")}
            />
        </div>
    </div>
  )
}
export default RoomNavLocateSection