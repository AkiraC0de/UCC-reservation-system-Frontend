import useRoom from "../../../hooks/useRoom"
import { useMemo } from "react"
import { ROOM_RESERVATION_ROOM_MAP } from "../../../configs/Room.config"

const BuildingFloorButtons = ({upPos, downPos}) => {
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
      <BuildingFloorButton 
        onClick={handleGoUpFloor}
        posX={upPos.x}
        posY={upPos.y}
        up
      />
      <BuildingFloorButton 
        onClick={handleGoDownFloor}
        posX={downPos.x}
        posY={downPos.y}
      />
    </>
  )
}

const BuildingFloorButton = ({onClick, posX, posY, up}) => {
  return(
    <div
      className="absolute w-[7%] h-[35%] z-51 has-[.child:hover]:z-52"
      style={{
        top: posX + "%",
        right: posY + "%"
      }}
    >
      <button 
        className="peer child cube-2 hover:-translate-y-[14%] z-51 text-sm text-white font-semibold w-full h-full opacity-75 bg-blue-gradient cursor-pointer  hover:opacity-100"
        onClick={onClick}
      >  
        <span className="rotate-90 absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2">{up ? "UP" : "DOWN"}</span>
      </button>

      <div 
        className="peer-hover:-translate-y-[88%]  peer-hover:z-50 peer-hover:opacity-100 absolute opacity-0 cube-2-dark bottom-[27.2%] right-[-39%] w-[250%] bg-blue-400 h-[16.5%]"
      ></div>

      <div 
        className="peer-hover:-translate-y-[92%] opacity-0 peer-hover:z-50 peer-hover:opacity-100  absolute cube-2-light bottom-[15%] right-[-88.2%] bg-blue-300 w-full h-[16.5%]"
      ></div>

    </div>
  )
}

export default BuildingFloorButtons