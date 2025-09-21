import { useMemo } from "react"
import { CONGRESSIONAL_ROOM_PROGRESS_ITEMS } from "../../configs/Room.config"
import useRoom from "../../hooks/useRoom"

const RoomHeaderStages = () => {
  const {stage} = useRoom()

  const LAST_INDEX = useMemo(() => {
    return CONGRESSIONAL_ROOM_PROGRESS_ITEMS.length - 1
  }, [])

  const isActive = (index) => {
    return index == stage
  }

  const isCompleted = (index) => {
    return index < stage
  }

  return (
    <ul className="text-[11px] flex justify-between items-center font-meduim px-8 ">
      {
        CONGRESSIONAL_ROOM_PROGRESS_ITEMS.map((item, index) => (
          <>
            <li 
              key={item.id}
              className="flex flex-col justify-center items-center gap-1 w-12"
            >
              <item.icon 
                className={`${isActive(item.stage) || isCompleted(item.stage) ? "fill-green-500" : "fill-black-text"} w-7 duration-300 transition-all`}/>
                <h2
                  className={`${isActive(item.stage) || isCompleted(item.stage) ? "text-green-500 font-semibold" : "text-black-text"} duration-300 transition-all`}
                >
                  {item.label}
                </h2>
            </li>
            { LAST_INDEX != index && <ProgressBar isActive={isActive(item.stage)} isCompleted={isCompleted(item.stage)}/>}
          </>
        )) 
      }

    </ul>
  )
}

const ProgressBar = ({isActive, isCompleted}) => {
  return(
    <div className="h-1 w-full bg-black-text relative rounded-4xl">
      <div className={`${isActive ? "w-1/2 delay-300" : isCompleted ? "w-full" : "w-0"} duration-300 transition-all h-1 bg-green-400 absolute left-0 rounded-4xl`}></div>
    </div>
  )
}

export default RoomHeaderStages