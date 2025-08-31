import { RoomContext } from "../context/roomContext";
import { useState } from "react";

const RoomProvider = ({children}) => {
    const [stage, setStage] = useState(1)

    const [isNavOpen, setIsNavOpen] = useState(true)
    const [building, setBuilding] = useState(null)

    const handleBuilding = (val) => {
      setBuilding(val)
      setStage(2)
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
        }}>
        {children}
    </RoomContext.Provider>
  )
}
export default RoomProvider