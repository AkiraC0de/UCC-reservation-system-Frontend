import { useMemo } from "react"
import { ITEMS_DATA } from "../../configs/Items.config"
import { useParams } from "react-router"

const RightSection = () => {
  const { type, id } = useParams()
  const selectedItem = useMemo(() => ITEMS_DATA.find(item => item.id == id))
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-300 w-full center h-74 p-16">
        <img className="object-cover" src={selectedItem.imgUrl} alt={selectedItem.codeName} />
      </div>
      <h2 className="text-xl font-semibold capitalize">{selectedItem.codeName}</h2>
      <p>{selectedItem.connection}</p>
    </div>
  )
}
export default RightSection