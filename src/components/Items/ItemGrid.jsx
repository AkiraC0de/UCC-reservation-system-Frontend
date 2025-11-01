import PeriperalCard from "./PeriperalCard"
import ProjectorCard from "./ProjectorCard"
import TvCard from "./TvCard"

const ItemGrid = ({data}) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.map((item) => {
          if(item.type === "projector"){
            return <ProjectorCard key={item.id} proj={item} />
          } else if(item.type === "peripheral"){
            return <PeriperalCard key={item.id} peripheral={item}/>
          } else if(item.type === "television"){
            return <TvCard key={item.id} television={item}/>
          }
        })}
      </div>
      {data.length === 0 && (
        <p className="text-center text-gray-500 mt-8 w-full">No equipment matches your filters.</p>
      )}
    </>
  )
}
export default ItemGrid