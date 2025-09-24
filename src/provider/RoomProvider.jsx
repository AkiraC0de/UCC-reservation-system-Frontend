import { RoomContext } from "../context/roomContext";
import { useState } from "react";
import { ROOM_RESERVATION_DEFAULT_VALUE } from "../configs/Room.config";

const STAGES = {
  building: 1,
  floor: 2,
  room: 3
}

const RoomProvider = ({children}) => {
    const [stage, setStage] = useState(1)
    const [reservation, setReservation] = useState(ROOM_RESERVATION_DEFAULT_VALUE)

    // Handle the reservation per input changes
    const handleReservation = (inputName, value) => {
      setReservation(prev => (
        {
          ...prev,
          [inputName]: value === undefined ? !prev[inputName] : value
        }
      ))
      
      // THIS PART WILL REQUIRE FUTURE UPDATES
      setStage(STAGES[inputName] + 1 || 1);
    }

    const handleResetReservation = () => {
      setReservation(ROOM_RESERVATION_DEFAULT_VALUE)
    }

    const handleReservationUndo = () => {
      console.log(stage)
      // Get the Last Input name
      const prevStageInputName = Object.keys(STAGES)[stage - 2]
      const prevTwiceStageInputName = Object.keys(STAGES)[stage - 3]

      if(!lastStageInputName) return

      // Then if the Last Input Value is NOT the same as its default
      // Reset the value to its default value
      // And undo the stage one time 
      if(reservation[prevStageInputName] !== ROOM_RESERVATION_DEFAULT_VALUE[prevStageInputName]){
        handleReservation(prevStageInputName, ROOM_RESERVATION_DEFAULT_VALUE[prevStageInputName])
        setStage(prev => prev > 1 ? prev - 1 : prev)
      } else {
        // Otherwise, undo the stage twice to Skip the stage
        handleReservation(prevTwiceStageInputName, ROOM_RESERVATION_DEFAULT_VALUE[prevTwiceStageInputName])
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