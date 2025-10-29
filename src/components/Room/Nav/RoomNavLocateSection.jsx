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
      if(room.available) return {label: room.no, value: room.id}
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
    <div className="flex flex-col gap-5 max-h-fit">
      <h2 className="font-semibold uppercase text-sm text-black-text">Locate your prefered room</h2>
        <div className="flex max-h-[40px] items-start gap-4 transition-all duration-500 w-full">
            <Select 
              label="Building"
              className="flex-1 bg-white z-50"
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
              className="bg-white z-50 w-30"
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
        </div>
        <div className="max-h-[40px]">
          <Select 
            label="Room"
            className="flex-1 bg-white z-49"
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