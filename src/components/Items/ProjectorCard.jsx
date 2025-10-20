import ConnectionIcon from "../Shared/Icons/ConnectionIcon"
import LocateIcon from "../Shared/Icons/LocateIcon"

const ProjectorCard = ({proj}) => {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer group hover:border-1 w-80">
      <div className="bg-gray-300 p-4 aspect-square w-full">
        <img src={proj.imgUrl} alt="projector" className="group-hover:scale-110 transition-all duration-300"/>
      </div>
      <div className="p-3 pt-1 space-y-2 text-black-text">
        <div>
          <h2 className="font-medium text-lg uppercase ">{proj.codeName}</h2>
          <h3 className="text-sm">Model: {proj.model}</h3>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <ConnectionIcon className="w-7 fill-gray-500"/>
          <p>{proj.connection}</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <LocateIcon className="w-6 fill-gray-500"/>
          <p>{proj.location}</p>
        </div>
      </div>
    </div>
  )
}
export default ProjectorCard