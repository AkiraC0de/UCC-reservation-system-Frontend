import { RoomContext } from "../context/roomContext";
import { useState } from "react";

const RoomProvider = ({children}) => {
    const [stage, setStage] = useState(1)

    const [reservation, setReservation] = useState({
      building: null,
      floor: 1,
    })

    const handleReservation = (inputName, value) => {
      const STAGES = {
        building: 1,
        floor: 2,
        room: 3
      }
      setReservation(prev => (
        {
          ...prev,
          [inputName]: value === undefined ? !prev[inputName] : value
        }
      ))

      //Adjust the stage to proceed to the next options
      setStage(STAGES[inputName] + 1 || 1)
    }

    const handleStage = (val) => {
      setStage(val)
    }

  return (
    <RoomContext.Provider value={{
        stage, handleStage,
        reservation, handleReservation,
        }}>
        {children}
    </RoomContext.Provider>
  )
}
export default RoomProvider