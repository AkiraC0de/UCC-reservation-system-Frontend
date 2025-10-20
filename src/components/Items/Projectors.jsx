import { PROJECTORS_DATA } from "../../configs/Items.config"
import ProjectorCard from "./ProjectorCard"
import TvCard from "./TvCard"

const Projectors = () => {
  return (
    <div className="flex flex-col  gap-5 mt-6">
      <h1 className="text-xl font-semibold uppercase text-gray-text">projectors / TV</h1>
      <div className="flex flex-wrap gap-6">
        {PROJECTORS_DATA.map(item => (<ProjectorCard key={item.id} proj={item}/>))}
        <TvCard/>
      </div>
    </div>
  )
}
export default Projectors