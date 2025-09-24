import BuildingFloorButtons from "./BuildingFloorButtons"
import BuildingRoomButtons from "./BuildingRoomButtons"

const RightWingButtons = () => {
  return (
    <>
      <BuildingFloorButtons 
        upPos={{x: 10.3, y:43 }}
        downPos={{x: 4.6, y: 38}}
      />
      <BuildingRoomButtons/>
    </>
  )
}
export default RightWingButtons