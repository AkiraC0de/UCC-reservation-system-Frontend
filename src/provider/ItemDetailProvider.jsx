import { useParams } from "react-router"
import { ITEMS_DATA } from "../configs/Items.config"
import { ItemDetailContext } from "../context/itemDetailContext"
import { useMemo, useState } from "react"

const ItemDetailProvider = ({children}) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedSchedule, setSelectedSchedule] = useState(
    {
      startingTime: null,
      outTime: null,
      date: null
    }
  )

  const { id } = useParams()
  const selectedItem = useMemo(() => {
    return ITEMS_DATA.find(item => item.id === id)
  }, [])

  const handleSelectedSchedule = (name, value) => {
    setSelectedSchedule(prev => ({...prev, [name]: value}))
  }

  const toggleConfirmation = () => {
    setShowConfirmation(prev => !prev)
  }

  return (
    <ItemDetailContext.Provider value={{
      selectedSchedule, 
      handleSelectedSchedule,
      selectedItem,
      showConfirmation,
      toggleConfirmation
    }}>
      {children}
    </ItemDetailContext.Provider>
  )
}
export default ItemDetailProvider