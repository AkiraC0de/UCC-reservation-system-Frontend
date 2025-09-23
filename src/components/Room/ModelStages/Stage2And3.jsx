import useRoom from "../../../hooks/useRoom"
import LeftWing from "../Buildings/LeftWing"
import RightWing from "../Buildings/RightWing"

const Stage2And3 = () => {
  return renderBuilding()
}

const renderBuilding = () => {
  const { reservation } = useRoom()
  
  switch(reservation.building) {
    case "Left Wing" :
        return (<>
          <h1 className="z-60 absolute top-2 font-bold text-2xl tracking-wider capitalize text-black-text">
          - LEFT WING -
          </h1>
          <LeftWing/>
        </>)
      break
    case "Right Wing":
        return (<>
          <h1 className="z-60 absolute top-2 font-bold text-2xl tracking-wider capitalize text-black-text">
          - RIGHT WING -
          </h1>
          <RightWing/>
        </>)
      break
    default: 
      return <p>Building Cannot Find</p>
  }
}

export default Stage2And3