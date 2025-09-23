import { useMemo } from "react"
import useRoom from "../../../hooks/useRoom"
import { ROOM_RESERVATION_ROOM_MAP } from "../../../configs/Room.config"

const LeftWingButtons = () => {
  return (
    <> 
      <LeftWingFloorButtons/>
      <LeftWingRoomButtons/>
    </>
  )
}

const LeftWingFloorButtons = () => {
  const {reservation, handleReservation} = useRoom()
  
  //GET how many floors the selected building has
  const MAX_FLOOR = useMemo(() => {
    return Object.keys(ROOM_RESERVATION_ROOM_MAP[reservation.building]).length
  }, [reservation.building])

  const handleGoUpFloor = () => {
    if(reservation.floor < MAX_FLOOR) handleReservation("floor", reservation.floor + 1)
  }

  const handleGoDownFloor = () => {
    if(reservation.floor > 1) handleReservation("floor", reservation.floor - 1)
  }

  return (
    <>
      <button 
        className="cube-2 hover:-translate-y-3 hover:z-50 text-sm text-white font-semibold opacity-75 bg-blue-gradient cursor-pointer absolute top-[37.3%] right-[66.5%] w-[7%] h-[35%] hover:opacity-100"
        onClick={handleGoUpFloor}
      >  
        UP
      </button>
      <button 
        className="cube-2 cube-hover  text-sm text-white font-semibold opacity-75 bg-blue-gradient cursor-pointer absolute top-[42.8%] right-[71.5%] w-[7%] h-[35%] hover:opacity-100"
        onClick={handleGoDownFloor}
      >
        DOWN
      </button>   
    </>
  )
}

const LeftWingRoomButtons = () => {
  const {reservation} = useRoom()

  // GET the room data for selected building and floor
  const ROOM_LIST = useMemo(() => {
    return ROOM_RESERVATION_ROOM_MAP[reservation.building][reservation.floor] || []
  }, [reservation.floor]) 

  return(
    ROOM_LIST.map((room, index) => (
      <div 
        key={room.id}
        className="hover:z-50 opacity-75 absolute w-[25.3%] h-[35%]"
         style={{
            top: room.btnPos.y + "%",
            right: room.btnPos.x + "%",
          }}
      >
        <button
          className="peer hover:-translate-y-[14%] flex flex-col justify-center items-center  cube-2 w-full h-full text-2xl font-medium text-white cursor-pointer hover:opacity-100 transition-all duration-500"
          style={{
            background: room.available ? "linear-gradient(120deg, #c0ea5c 0%, #54cf65 100%)" : "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)"
          }}    
        >
          <h2>{room.no}</h2>
          <h3>{room.label}</h3>
          
        </button>
        <LeftWingRoomButtonsOverlay/>
      </div>
    ))
  )   
}

const LeftWingRoomButtonsOverlay = () => {
  return(
    <>
      <div className="peer-hover:-translate-y-[14%] absolute cube-2-light bottom-[17%] right-[-25%] w-full bg-red-400 h-[14%]"></div>
    </>
  )
}

export default LeftWingButtons