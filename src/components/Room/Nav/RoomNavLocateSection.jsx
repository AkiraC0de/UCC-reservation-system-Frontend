import useRoom from "../../../hooks/useRoom"
import Select from "../../Shared/Select"
import BuildingIcon from "../../Shared/Icons/BuildingIcon"
import { useState } from "react"

const RoomNavLocateSection = () => {

  const {reservation, handleReservation} = useRoom()

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
              valueAddress="building"
              value={reservation.building}
              handleValue={handleReservation}
              options={[
                {label: "Left Wing"},
                {label: "Right Wing"},
              ]}
              isRequired={isRequired.building}
              handleRequiredTurnOff={() => handleIsRequired("building", false)}
            />
            <Select 
              label="Floor"
              unlock={reservation.building}
              Icon={BuildingIcon}
              valueAddress="floor"
              value={reservation.floor}
              handleValue={handleReservation}
              options={[
                {label: "1st", value: 1},
                {label: "2nd", value: 2},
                {label: "3rd", value: 3},
                {label: "4th", value: 4},
              ]}
              handleLock={() => handleIsRequired("building", true)}
            />
            <Select 
              label="Room"
              unlock={reservation.building}
              Icon={BuildingIcon}
              valueAddress="room"
              value={"Test"}
              handleValue={handleReservation}
              options={[
                {label: "301", value: 1},
                {label: "302", value: 2},
                {label: "3rd Floor", value: 2},
                {label: "4th Floor", value: 2},
                {label: "4th2 Floor", value: 2},
              ]}
              handleLock={() => handleIsRequired("building", true)}
            />
        </div>
    </div>
  )
}
export default RoomNavLocateSection