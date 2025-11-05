import {ArrowUpRight} from 'lucide-react'

const InformationCard = ({label = "", data = 0, Icon, iconColor = ""}) => {
  return (
    <button className=" hover:scale-104 transition-all duration-300 cursor-pointer w-full px-4 py-2.5 shadow-md rounded-lg flex items-center gap-4 text-start">
      <div 
        className="w-12 h-12 center rounded-lg"
        style={{background: iconColor}}
      >
        <Icon color="white" size={30}/>
      </div>
      <div className="text-black-text flex justify-center flex-col h-full">
          <span className="font-semibold text-2xl ">{data}</span>
          <p className="font-medium text-sm text-gray-text text-nowrap leading-4">{label}</p>
      </div>
      <div className="ml-auto">
        <ArrowUpRight color="#58d064"/>
      </div>
    </button>
  )
}
export default InformationCard