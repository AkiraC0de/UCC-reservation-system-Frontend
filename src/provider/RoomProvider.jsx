import { RoomContext } from "../context/roomContext";
import { useState } from "react";
import { ROOM_RESERVATION_DEFAULT_VALUE } from "../configs/Room.config";

const RoomProvider = ({children}) => {
    const [stage, setStage] = useState(1)
    const [reservation, setReservation] = useState(ROOM_RESERVATION_DEFAULT_VALUE)

    const STAGES = {
      building: 1,
      floor: 2,
      room: 3
    }

    // Handle the reservation per input changes
    const handleReservation = (inputName, value) => {
      setReservation(prev => (
        {
          ...prev,
          [inputName]: value === undefined ? !prev[inputName] : value
        }
      ))
      
      // THIS PART WILL REQUIRE FUTURE UPDATES
      // Only advance the stage if the current inputName corresponds to the current stage
      // This prevents resetting progress if a previous step is modified
      if (stage === STAGES[inputName]) {
        setStage(STAGES[inputName] + 1 || 1);
      }   
    }

    const handleResetReservation = () => {
      setReservation(ROOM_RESERVATION_DEFAULT_VALUE)
    }

    const handleReservationUndo = () => {
      // Get the Last Input name
      const lastStageInputName = Object.keys(STAGES)[stage - 2]

      if(!lastStageInputName) return

      // Then if the Last Input Value is NOT the same as its default
      // Reset the value to its default value
      // And undo the stage one time 
      if(reservation[lastStageInputName] !== ROOM_RESERVATION_DEFAULT_VALUE[lastStageInputName]){
        handleReservation(lastStageInputName, ROOM_RESERVATION_DEFAULT_VALUE[lastStageInputName])
        setStage(prev => prev > 1 ? prev - 1 : prev)
      } else {
         // Otherwise, undo the stage twice to Skip the stage
      setStage(prev => prev > 2 ? prev - 2 : prev > 1 ? prev - 1 : prev)
      }

    }
     

    const handleStage = (val) => {
      setStage(val)
    }

  return (
    <RoomContext.Provider value={{
          stage, 
          handleStage,
          reservation, 
          handleReservation, 
          handleResetReservation, 
          handleReservationUndo
        }}>
        {children}
    </RoomContext.Provider>
  )
}
export default RoomProvider