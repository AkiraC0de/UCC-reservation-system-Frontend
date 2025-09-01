import useRoom from "../../../hooks/useRoom"
import LeftWing from "../LeftWing"
import RightWing from "../RightWing"

const renderBuilding = () => {
  const { building } = useRoom()
  console.log(building)

  switch(building) {
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

const Stage2 = () => {
  return (
    <>
      {renderBuilding()}
    </>
    
  )
}
export default Stage2