import { useContext } from "react"
import { ItemDetailContext } from "../context/itemDetailContext"

const useItemDetail = () => {
  const context = useContext(ItemDetailContext)

  return context
}

export default useItemDetail