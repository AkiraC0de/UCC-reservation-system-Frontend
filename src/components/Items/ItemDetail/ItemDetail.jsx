import { ITEMS_DATA } from "../../../configs/Items.config"
import ScheduleTable from "../../Room/ScheduleTable/ScheduleTable"
import { useParams } from "react-router"

const ItemDetail = () => {
  const { type, id } = useParams()
  const selectedItem = ITEMS_DATA.find(item => item.id == id)
  //console.log(selectedItem.imgUrl)
  return (
    <div>
        <div>
          <img className="w-100 h-100w" src={selectedItem.imgUrl} alt={selectedItem.codeName} />
          <h2>{selectedItem.codeName}</h2>
          <p>{selectedItem.connection}</p>
        </div>
    </div>
  )
}
export default ItemDetail