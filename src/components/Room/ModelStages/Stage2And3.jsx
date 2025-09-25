import useRoom from "../../../hooks/useRoom"
import LeftWing from "../Buildings/LeftWing"
import RightWing from "../Buildings/RightWing"
import ModelPlatformHeader from "../ModelPlatformHeader"

const Stage2And3 = () => {
  return renderBuilding()
}

const renderBuilding = () => {
  const { reservation } = useRoom()
  
  switch(reservation.building) {
    case "Left Wing" :
        return (
          <>
            <ModelPlatformHeader>
              - LEFT WING -
            </ModelPlatformHeader>
            <LeftWing/>
          </>
        )
      break
    case "Right Wing":
        return (
          <>
            <ModelPlatformHeader>
              - RIGHT WING -
            </ModelPlatformHeader>
            <RightWing/>
          </>
        )
      break
    default: 
      return <p>Building Cannot Find</p>
  }
}

export default Stage2And3