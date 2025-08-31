import useRoom from "../../hooks/useRoom"

const RoomNavHeader = () => {
    const {isNavOpen, HandleNavOpen, handleStage} = useRoom()

  return (
    <div className="flex justify-between items-center">
        <h1 className={`${!isNavOpen ? 'w-0 hidden' : 'w-full'} text-lg font-semibold transition-all duration-300`}>Navigation</h1>
        <div className={`flex gap-2 ${!isNavOpen && "flex-col-reverse"}`}>
          <button className="border-3 w-9 aspect-square p-1.5 rounded-2xl cursor-pointer">
            <svg 
              fill="#000000" 
              width="100%" 
              viewBox="0 0 1920 1920" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0" fillRule="evenodd"/>
            </svg>
          </button>
          <button 
            onClick={() => handleStage(prev => prev != 1 ? prev - 1 : prev)}
            className="border-3 w-9 aspect-square p-1.5 rounded-2xl cursor-pointer">
            <svg 
              fill="#000000" 
              width="100%"
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"/>
            </svg>
          </button>
          <button 
            onClick={HandleNavOpen}
            className="w-9 bg-green-500 rounded-full fill-white flex justify-center items-center cursor-pointer">
              <svg width="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"/>
              </svg>
          </button>
        </div>
        
    </div>
  )
}
export default RoomNavHeader