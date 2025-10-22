import { ITEMS_DATA } from "../../configs/Items.config" 
import PeriperalCard from "./PeriperalCard"

const Periperals = () => {
  return (
    <div className="flex flex-col  gap-5 mt-6">
      <h1 className="text-xl font-semibold uppercase text-gray-text">Computer Periperals</h1>
      <div className="flex flex-wrap gap-6">
        {ITEMS_DATA.filter(item => item.type == "periperals").map(item => <PeriperalCard key={item.id} periperal={item}/>)}
      </div>
    </div>
  )
}
export default Periperals