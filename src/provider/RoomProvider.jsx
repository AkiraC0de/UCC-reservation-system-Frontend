import { RoomContext } from "../context/roomContext";
import { useState } from "react";

const RoomProvider = ({children}) => {
    const [isNavOpen, setIsNavOpen] = useState(true)

    const HandleNavOpen = () => {
        setIsNavOpen(prev => !prev)
    }

  return (
    <RoomContext.Provider value={{isNavOpen, HandleNavOpen}}>
        {children}
    </RoomContext.Provider>
  )
}
export default RoomProvider