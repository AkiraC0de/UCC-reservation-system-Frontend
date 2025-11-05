import { ClipboardMinus, ArrowUpRight } from 'lucide-react'

const UserApplication = ({data = 0}) => {
  return (
    <button className="flex flex-col text-start w-full min-h-40 h-full bg-green-gradient-2 rounded-3xl relative p-4 shadow-md hover:scale-104 transition-all duration-300 cursor-pointer">
    <div className="bg-lime-500 w-13 aspect-square rounded-full center absolute top-4 left-4">
      <ClipboardMinus size={35} color="white"/>
    </div>
    <div className="flex flex-col justify-between h-full">
      <div className="w-full flex justify-end">
        <div
          className="flex items-center cursor-pointer text-white font-medium text-sm gap-1"
        >
          <span>See details</span>
          <ArrowUpRight />
        </div>
        
      </div>
      <div className="text-white ">
          <span className="font-semibold text-3xl">{data}</span>
          <p className="font-medium text-sm">User Applications</p>
      </div>
    </div>
  </button>
  )
}
export default UserApplication