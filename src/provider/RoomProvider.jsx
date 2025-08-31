import { RoomContext } from "../context/roomContext";
import { useState } from "react";

const RoomProvider = ({children}) => {
    const [isNavOpen, setIsNavOpen] = useState(true)
    const [building, setBuilding] = useState(null)

    const handleBuilding = (val) => {
      setBuilding(val)
    }

    const HandleNavOpen = () => {
        setIsNavOpen(prev => !prev)
    }

  return (
    <RoomContext.Provider value={{
        isNavOpen, HandleNavOpen,
        building, handleBuilding,
        }}>
        {children}
    </RoomContext.Provider>
  )
}
export default RoomProvider