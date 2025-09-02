import { RoomContext } from "../context/roomContext";
import { useState } from "react";

const RoomProvider = ({children}) => {
    const [stage, setStage] = useState(1)

    const [isNavOpen, setIsNavOpen] = useState(true)
    const [building, setBuilding] = useState(null)
    const [floor, setFloor] = useState(1)

    const handleBuilding = (val) => {
      setBuilding(val)
      setStage(2)
    }

    const handleFloor = (val) => {
      setFloor(val)
    }

    const HandleNavOpen = () => {
      setIsNavOpen(prev => !prev)
    }

    const handleStage = (val) => {
      setStage(val)
    }

  return (
    <RoomContext.Provider value={{
        stage, handleStage,
        isNavOpen, HandleNavOpen,
        building, handleBuilding,
        floor, handleFloor
        }}>
        {children}
    </RoomContext.Provider>
  )
}
export default RoomProvider