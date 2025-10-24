import { Link } from "react-router"
import LocateIcon from "../Shared/Icons/LocateIcon"

const PeriperalCard = ({periperal}) => {
  const {id, type, codeName, location, imgUrl} = periperal
  return (
    <Link 
      to={`/items/${type}/${id}`}
      className="w-50 bg-white shadow-md rounded-lg text-sm overflow-hidden group hover:border-1 cursor-pointer ">
      <div className="bg-gray-300">
        <img className="group-hover:scale-110 transition-all duration-300 aspect-square" src={imgUrl} alt="" />
      </div>
      <div className="px-3 py-1 space-y-1">
        <h2 className="uppercase text-black-text font-medium">{codeName}</h2>
        <div className="flex items-center gap-1 text-gray-500">
          <LocateIcon className="w-6 fill-gray-500"/>
          <p>{location}</p>
        </div>
      </div>
    </Link>
  )
}
export default PeriperalCard