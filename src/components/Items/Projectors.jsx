import { PROJECTORS_DATA } from "../../configs/Items.config"
import ProjectorCard from "./ProjectorCard"

const Projectors = () => {
  return (
    <div className="flex flex-col  gap-5 mt-6">
      <h1 className="text-xl font-semibold uppercase text-gray-text">projectors</h1>
      <div className="flex flex-wrap gap-8 ">
        {PROJECTORS_DATA.map(item => (<ProjectorCard key={item.id} proj={item}/>))}
      </div>
    </div>
  )
}
export default Projectors