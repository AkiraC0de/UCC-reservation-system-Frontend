import useRoom from "../../../hooks/useRoom"

const RoomControl = () => {
  const {handleStage} = useRoom()

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleStage(1)} 
        className="bg-gray-200 w-9 aspect-square p-2.5 rounded-full cursor-pointer group relative">
        <svg 
          fill="#303135 " 
          width="100%" 
          viewBox="0 0 1920 1920" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0" fillRule="evenodd"/>
        </svg>
        <span className="bg-white px-0.5 rounded-sm shadow-sm z-50 text-xs font-medium -top-6 right-1/2 translate-x-1/2 absolute opacity-0 group-hover:opacity-100 duration-300 transition-all text-black-text">
          Reset
        </span>
      </button>
      <button 
        onClick={() => handleStage(prev => prev != 1 ? prev - 1 : prev)}
        className="bg-gray-200 w-9 aspect-square p-2.5 rounded-full cursor-pointer relative group">
        <svg 
          fill="#303135" 
          width="100%"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"/>
        </svg>
        <span className="bg-white px-0.5 rounded-sm shadow-sm text-xs font-medium -top-6 right-1/2 translate-x-1/2 absolute opacity-0 group-hover:opacity-100 duration-300 transition-all text-black-text">
          Back
        </span>
      </button>
    </div>
  )
}
export default RoomControl