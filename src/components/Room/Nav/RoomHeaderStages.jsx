import { useMemo } from "react"
import { CONGRESSIONAL_ROOM_PROGRESS_ITEMS } from "../../../configs/Room.config"
import useRoom from "../../../hooks/useRoom"
import { Fragment } from "react"

const RoomHeaderStages = () => {
  const {stage, selectedSchedule} = useRoom()

  const isOnConfirmation = selectedSchedule.startingTime !== null && selectedSchedule.outTime !== null
  
  const LAST_INDEX = useMemo(() => {
    return CONGRESSIONAL_ROOM_PROGRESS_ITEMS.length - 1
  }, [])

  const isActive = (index) => {
    return index <= stage
  }

  const isCompleted = (index) => {
    return index < stage
  }

  return (
    <ul className="text-[11px] flex justify-between items-center font-meduim px-8 py-5">
      {
        CONGRESSIONAL_ROOM_PROGRESS_ITEMS.map((item, index) => (
          <Fragment key={item.id}>
            {
              LAST_INDEX != index ?
              <div className="flex flex-col justify-center items-center gap-1 w-12">
                <item.icon 
                  className={`${isActive(item.stage) || isCompleted(item.stageEnd) ? "fill-green-500" : "fill-black-text/40"} w-7 duration-300 transition-all`}/>
                  <h2
                    className={`${isActive(item.stage) || isCompleted(item.stageEnd) ? "text-green-500 font-semibold" : "text-black-text/40"} duration-300 transition-all`}
                  >
                    {item.label}
                  </h2>
              </div>
              :
              <div className="flex flex-col justify-center items-center gap-1 w-12">
                <item.icon 
                  className={`${isOnConfirmation ? "fill-green-500" : "fill-black-text/40"} w-7 duration-300 transition-all`}/>
                  <h2
                    className={`${isOnConfirmation  ? "text-green-500 font-semibold" : "text-black-text/40"} duration-300 transition-all`}
                  >
                    {item.label}
                  </h2>
              </div>
            }
            { index == 0 && <ProgressBar isActive={isActive(item.stage)} isCompleted={isCompleted(item.stageEnd)}/>}
            { index == 1 && <ProgressBar isActive={isActive(item.stage)} isCompleted={isOnConfirmation}/>}
          </Fragment>
        )) 
      }

    </ul>
  )
}

const ProgressBar = ({isActive, isCompleted}) => {
  return(
    <div className="h-1 w-full bg-black-text/40 relative rounded-4xl">
      <div className={`${isCompleted ? "w-full" : isActive ? "w-1/2 delay-300" : "w-0"} duration-300 transition-all h-1 bg-green-400 absolute left-0 rounded-4xl`}></div>
    </div>
  )
}

export default RoomHeaderStages