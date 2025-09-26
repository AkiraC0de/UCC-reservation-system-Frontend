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

      // GET the Inputname Index to Stages
      const inputStage = STAGES[inputName] - 1

      // GET the ARRAY of other Inputs NAME 
      // that is ONLY next to the selected Input (inputName)
      const inputsNextToInputName = Object.keys(STAGES).filter((_, index) => index > inputStage)
      
      // THEN use the ARRAY of other Input NAME 
      // TO create NEW ARRAY with each corresponding default value 
      const resetedInputsList =  inputsNextToInputName?.map(item => {
        return [ item , ROOM_RESERVATION_DEFAULT_VALUE[item] ]
      })

      // CONVERT the NEW ARRAY to OBJECT
      const resetedInputsObj = Object.fromEntries(resetedInputsList)

      // THEN set the reservation with:
      // Previous value,
      // Reseted Value of Next inputs
      // New set value (value)
      setReservation(prev => (
        {
          ...prev,
          ...resetedInputsObj,
          [inputName]: value === undefined ? !prev[inputName] : value
        }
      ))
      
      // Lastly, set the stage to the next
      // THIS PART MIGHT REQUIRE FUTURE UPDATES
      setStage(STAGES[inputName] + 1 || 1);
    }

    const handleResetReservation = () => {
      setReservation(ROOM_RESERVATION_DEFAULT_VALUE)
    }

    const handleReservationUndo = () => {
      // Get the Last Input name
      const prevStageInputName = Object.keys(STAGES)[stage - 2]
      const prevTwiceStageInputName = Object.keys(STAGES)[stage - 3]

      if(!prevStageInputName) return

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