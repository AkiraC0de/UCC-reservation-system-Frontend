import ConnectionIcon from "../Shared/Icons/ConnectionIcon"
import LocateIcon from "../Shared/Icons/LocateIcon"
import Banner from "../Shared/Banner"

import { ITEMS_DATA } from "../../configs/Items.config"

const TvCard = () => {
  const { codeName, location, connection, imgUrl } = ITEMS_DATA.find(item => item.type == "television")
  return (
    <div className="bg-white flex-1 min-w-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:border-1 group">
      <div className="max-h-62 min-h-50 w-full center bg-gray-300 overflow-hidden">
        <img className="h-full aspect-video group-hover:scale-105 transition-all duration-300" src={imgUrl} alt="television" />
      </div>
      <div className="p-3 pt-1 space-y-2 text-black-text">
        <h2 className="font-medium text-lg uppercase ">{codeName}</h2>
        <div className="flex items-center gap-1 text-gray-500">
          <ConnectionIcon className="w-7 fill-gray-500"/>
          <p>{connection}</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <LocateIcon className="w-6 fill-gray-500"/>
          <p>{location}</p>
        </div>
      </div>
      <Banner label="NEW" background="#008236" fontSize="12px"/>
    </div>
  )
}
export default TvCard