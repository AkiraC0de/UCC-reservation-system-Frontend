import { useMemo } from "react"
import useRoom from "../../../hooks/useRoom"
import { ROOM_RESERVATION_ROOM_MAP } from "../../../configs/Room.config"
import BuildingFloorButtons from "./BuildingFloorButtons"
import BuildingRoomButtons from "./BuildingRoomButtons"

const LeftWingButtons = () => {
  return (
    <> 
      <BuildingFloorButtons 
        upPos={{x: 37.3, y:66.5 }}
        downPos={{x: 42.8, y: 71.5}}
      />
      <BuildingRoomButtons/>
    </>
  )
}
export default LeftWingButtons