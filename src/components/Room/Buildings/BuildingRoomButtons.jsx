import { ROOM_RESERVATION_ROOM_MAP } from "../../../configs/Room.config"
import { useMemo } from "react"
import useRoom from "../../../hooks/useRoom"

const BuildingRoomButtons = () => {
  const {reservation, handleReservation} = useRoom()

  const handleClick = (value) => {
    handleReservation("room", value)
  }

  // GET the room data for selected building and floor
  const ROOM_LIST = useMemo(() => {
    return ROOM_RESERVATION_ROOM_MAP[reservation.building]?.[reservation.floor] || []
  }, [reservation.building, reservation.floor]) 

  return ROOM_LIST.map((room, index) => (
      <div 
        key={room.id}
        className="absolute w-[25.3%] h-[35%] z-50 has-[.child:hover]:z-51 group"
         style={{
            top: room.btnPos.y + "%",
            right: room.btnPos.x + "%",
          }}
      >
        <BuildingRoomButton onClick={handleClick} room={room} isAvailable={room.available}/>
        <BuildingRoomButtonOverlay isAvailable={room.available}/>
      </div>
    ))
}

const BuildingRoomButton = ({room, onClick}) => {
  const { no, label, available, value } = room

  const handleClick = () => {
    if(available) onClick(no)
  }

  return(
    <button
      onClick={handleClick}
      className="peer child opacity-75 hover:-translate-y-[14%] hover:opacity-100 flex flex-col justify-center items-center  cube-2 w-full h-full text-2xl font-medium text-white cursor-pointer transition-all duration-500"
      style={{ 
        background: available ? "linear-gradient(120deg, #c0ea5c 0%, #54cf65 100%)" : "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)"
      }}    
    >
      <h2>{no}</h2>
      <h3>{label}</h3>
      
    </button>
  )
}

const BuildingRoomButtonOverlay = ({isAvailable}) => {
  return(
    <>
      <div 
        className="peer-hover:-translate-y-[102%] peer-hover:z-50 peer-hover:opacity-100 opacity-0 absolute cube-2-light bottom-[12%] right-[-24.7%] w-full h-[16.5%]"
        style={{
          background: isAvailable ? "#afe65d" : "#fc97a7"
        }}
      ></div>
      <div 
        className="peer-hover:-translate-y-[100%] peer-hover:z-50 peer-hover:opacity-100 opacity-0 absolute cube-2-dark bottom-[3.4%] right-[50.5%] w-[69%] bg-red-400 h-[16.5%]"
        style={{
          background: isAvailable ? "#5cd164" : "#c75469"
        }}
      ></div>
    </>
  )
}
export default BuildingRoomButtons