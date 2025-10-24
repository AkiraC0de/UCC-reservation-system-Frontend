import { ItemDetailContext } from "../context/itemDetailContext"
import { useState } from "react"

const ItemDetailProvider = ({children}) => {
  const [selectedSchedule, setSelectedSchedule] = useState(
    {
      startingTime: null,
      outTime: null,
      date: null
    }
  )

  const handleSelectedSchedule = (name, value) => {
    setSelectedSchedule(prev => ({...prev, [name]: value}))
  }
  return (
    <ItemDetailContext.Provider value={{selectedSchedule, handleSelectedSchedule}}>
      {children}
    </ItemDetailContext.Provider>
  )
}
export default ItemDetailProvider