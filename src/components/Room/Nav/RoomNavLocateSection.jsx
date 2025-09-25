import useRoom from "../../../hooks/useRoom"
import Select from "../../Shared/Select"
import BuildingIcon from "../../Shared/Icons/BuildingIcon"
import { useState, useMemo } from "react"
import { ROOM_RESERVATION_ROOM_MAP } from "../../../configs/Room.config"

const RoomNavLocateSection = () => {

  const {reservation, handleReservation} = useRoom()

  const [isRequired, setIsRequired] = useState({
    building: false
  })

  const ROOM_SELECTIONS = useMemo(() => {
    const selectedFloorRooms = ROOM_RESERVATION_ROOM_MAP[reservation.building]?.[reservation.floor]
    
    if(!selectedFloorRooms) return

    const roomList = selectedFloorRooms.filter(room => room.available).map(room => {
      if(room.available) return {label: room.no}
    })

    return selectedFloorRooms ? roomList : []
  }, [reservation.floor, reservation.building])

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
        <div className="flex justify-between items-start gap-2 transition-all duration-500 w-full">
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
              handleLock={() => {
                handleIsRequired("building", false)
                setTimeout(() => {
                  handleIsRequired("building", true)
                }, 10);
              }}
            />
            <Select 
              label="Room"
              unlock={reservation.building}
              placeholder="Select"
              Icon={BuildingIcon}
              valueAddress="room"
              value={reservation.room}
              handleValue={handleReservation}
              options={ROOM_SELECTIONS}
              handleLock={() => {
                handleIsRequired("building", false)
                setTimeout(() => {
                  handleIsRequired("building", true)
                }, 10);
              }}
            />
        </div>
    </div>
  )
}
export default RoomNavLocateSection