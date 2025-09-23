import { useMemo } from "react"
import useRoom from "../../../hooks/useRoom"
import { ROOM_RESERVATION_ROOM_MAP } from "../../../configs/Room.config"

const LeftWingButtons = () => {
  const {reservation} = useRoom()

  // GET the room data for selected building and floor
  const ROOM_LIST = useMemo(() => {
    return ROOM_RESERVATION_ROOM_MAP[reservation.building][reservation.floor] || []
  }, [reservation.floor]) 
  
  return (
    <> 
      <LeftWingFloorButtons/>
      {
        ROOM_LIST.map(room => (
          <button
            className="absolute bg-green-400/20" 
            key={room.id}
          >
            {room.label}
          </button>
        ))
      }
    </>
  )
}

const LeftWingFloorButtons = () => {
  <button className="cube-2 font-semibold bg-amber-200 absolute top-[40%] right-[67.5%] w-[7%] h-[28%]">
    UP
  </button>  
}

export default LeftWingButtons