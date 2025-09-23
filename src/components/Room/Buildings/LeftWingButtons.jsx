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

// REQUIRE MAJOR REFACTORING 

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
      <div
        className="absolute top-[42.8%] right-[71.5%] w-[7%] h-[35%] z-70 hover:z-71"
      >
          <button 
          className="peer cube-2 hover:-translate-y-[14%] z-51 text-sm text-white w-full h-full font-semibold opacity-75 bg-blue-gradient cursor-pointer hover:opacity-100"
          onClick={handleGoDownFloor}
        >
          DOWN
        </button>   

        <div 
          className="peer-hover:-translate-y-[88%] peer-hover:z-50 peer-hover:opacity-100 absolute opacity-0 cube-2-dark bottom-[27.2%] right-[-39%] w-[250%] bg-blue-400 h-[16.5%]"
        ></div>

        <div 
          className="peer-hover:-translate-y-[92%] opacity-0 peer-hover:z-50 peer-hover:opacity-100  absolute cube-2-light bottom-[15%] right-[-88.6%] bg-blue-300 w-full h-[16.5%]"
        ></div>

      </div>
      <div
        className="absolute top-[37.3%] right-[66.5%] w-[7%] h-[35%] z-70 hover:z-71"
      >
        <button 
          className="peer cube-2 hover:-translate-y-[14%] z-51 text-sm text-white font-semibold w-full h-full opacity-75 bg-blue-gradient cursor-pointer  hover:opacity-100"
          onClick={handleGoUpFloor}
        >  
          UP
        </button>

        <div 
          className="peer-hover:-translate-y-[88%]  peer-hover:z-50 peer-hover:opacity-100 absolute opacity-0 cube-2-dark bottom-[27.2%] right-[-39%] w-[250%] bg-blue-400 h-[16.5%]"
        ></div>

        <div 
          className="peer-hover:-translate-y-[92%] opacity-0 peer-hover:z-50 peer-hover:opacity-100  absolute cube-2-light bottom-[15%] right-[-88.2%] bg-blue-300 w-full h-[16.5%]"
        ></div>

      </div>
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
        className="absolute w-[25.3%] h-[35%] hover:z-50 "
         style={{
            top: room.btnPos.y + "%",
            right: room.btnPos.x + "%",
          }}
      >
        <button
          className="peer opacity-75 hover:-translate-y-[14%] hover:opacity-100 flex flex-col justify-center items-center  cube-2 w-full h-full text-2xl font-medium text-white cursor-pointer transition-all duration-500"
          style={{ 
            background: room.available ? "linear-gradient(120deg, #c0ea5c 0%, #54cf65 100%)" : "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)"
          }}    
        >
          <h2>{room.no}</h2>
          <h3>{room.label}</h3>
          
        </button>
        <LeftWingRoomButtonsOverlay isAvailble={room.available}/>
      </div>
    ))
  )   
}

const LeftWingRoomButtonsOverlay = ({isAvailble}) => {
  return(
    <>
      <div 
        className="peer-hover:-translate-y-[102%] peer-hover:z-50 peer-hover:opacity-100 opacity-0 absolute cube-2-light bottom-[12%] right-[-24.7%] w-full h-[16.5%]"
        style={{
          background: isAvailble ? "#afe65d" : "#fc97a7"
        }}
      ></div>
      <div 
        className="peer-hover:-translate-y-[100%] peer-hover:z-50 peer-hover:opacity-100 opacity-0 absolute cube-2-dark bottom-[3.4%] right-[50.5%] w-[69%] bg-red-400 h-[16.5%]"
        style={{
          background: isAvailble ? "#5cd164" : "#c75469"
        }}
      ></div>
    </>
  )
}

export default LeftWingButtons