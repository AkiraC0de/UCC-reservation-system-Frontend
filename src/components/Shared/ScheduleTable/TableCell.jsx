import { useScheduleContext } from "./ScheduleTable"
import clsx from "clsx"

const TableCell = ({rowIndex, colIndex}) => {
  const { scheduleData, handleScheduleData, sortedData, focus, handleFocus } = useScheduleContext()
  
  // const cellVariantClasses = clsx({
  //     "bg-gray-100 hover:bg-gray-200": isFocusColumn && !matchedData && !isSelectableRange,
  //     "bg-blue-500 text-white": selectedStartingTime || selectedOutTime, 
  //     "hover:bg-blue-400": selectedOutTime,
  //     "bg-blue-200/50 hover:bg-blue-300/70": isSelectableRange,
  //     "bg-red-100 cursor-not-allowed": isOverLimit && !matchedData,
  //     "shimmer": isSelectableRange,
  //     "hover:bg-gray-100": !isFocusColumn && !matchedData,
  // })

  const handleCellClick = () => {
    if(colIndex != focus){
        handleScheduleData("date", sortedData.date.find((_,index) => index == colIndex))
        handleScheduleData("startingTime", null)
        handleScheduleData("outTime", null)
        return
    }
    
    // Apply new restriction based on calculated limit
    if (scheduleData.startingTime !== null && scheduleData.outTime === null) {
        if (rowIndex < scheduleData.startingTime) {
            handleScheduleData("startingTime", rowIndex)
            handleScheduleData("outTime", null)
            return // Cannot select time before the start time
        }
        // if (rowIndex >= maxSelectableRows) {
        //     return // Cannot select time at or after the barrier (max limit or existing reservation)
        // }
    }

    // 1. Set starting time (if neither is set)
    if (scheduleData.startingTime === null && scheduleData.outTime === null) { 
      handleScheduleData("startingTime", rowIndex)
      handleScheduleData("outTime", null)
    } 
    // 2. Set ending time (if starting is set, but ending isn't)
    else if (scheduleData.startingTime !== null && scheduleData.outTime === null) { 
      handleScheduleData("startingTime", rowIndex)
    } 
    // 3. Reset and start a new selection
    else {
      // Clear the old range and start a new one
      handleScheduleData("startingTime", rowIndex)
      handleScheduleData("outTime", null)
    }
  }

  const isOnColumnFocus = colIndex == focus

  const cellClasses = "w-full h-8 border-x-1 border-gray-100 cursor-pointer hover:bg-gray-100"
  const cellVariantClasses = clsx({
    "bg-gray-100 hover:bg-gray-200" : isOnColumnFocus
  })

  return (
    <div 
      className={`${cellClasses} ${cellVariantClasses}`}
      onClick={handleCellClick}
    >

    </div>
  )
}
export default TableCell