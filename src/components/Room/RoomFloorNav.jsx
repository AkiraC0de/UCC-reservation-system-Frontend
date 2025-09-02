import useRoom from "../../hooks/useRoom"

const RoomFloorNavBtn = ({flipY, onClick}) => {
  return(
    <button
      onClick={onClick}
      className="bg-gray-700 px-1.5 py-3 w-8 rounded-lg cursor-pointer"
    >
      <svg 
        className={flipY && "rotate-180"}
        width="100%" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
        <title/>
        <g id="Complete">
          <g id="arrow-up">
            <g>
              <polyline fill="none" id="Right-2" points="7 7.5 12 2.5 17 7.5" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <line fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="21.3" y2="4.8"/>
            </g>
          </g>
        </g>
      </svg>
    </button>
  )
}


const RoomFloorNav = () => {
  const {isNavOpen, floor, handleFloor} = useRoom()
  return (
    <div className={`flex gap-1 ${isNavOpen || "flex-col"} items-center`}>
      <RoomFloorNavBtn
        onClick={() => {handleFloor(prev => prev < 4 ? prev + 1 : prev)}}
      />
      <RoomFloorNavBtn 
        onClick={() => {handleFloor(prev => prev > 1 ? prev - 1 : prev)}}
        flipY
      />
      <span className="mx-2 font-semibold text-gray-700 text-xl">{floor} Floor</span>
    </div>
  )
}
export default RoomFloorNav