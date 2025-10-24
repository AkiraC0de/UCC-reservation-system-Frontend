import { useScheduleContext } from "./ScheduleTable"
import clsx from "clsx"

const TableCell = ({rowIndex, colIndex, onClick, onMouseEnter, onMouseLeave, maxSelectableRows}) => {
  const { focus, scheduleData } = useScheduleContext()
  
  // const cellVariantClasses = clsx({
  //     "bg-gray-100 hover:bg-gray-200": isFocusColumn && !matchedData && !isSelectableRange,
  //     "bg-blue-500 text-white": selectedStartingTime || selectedOutTime, 
  //     "hover:bg-blue-400": selectedOutTime,
  //     "bg-blue-200/50 hover:bg-blue-300/70": isSelectableRange,
  //     "bg-red-100 cursor-not-allowed": isOverLimit && !matchedData,
  //     "shimmer": isSelectableRange,
  //     "hover:bg-gray-100": !isFocusColumn && !matchedData,
  // })

  const isOnColumnFocus = colIndex == focus
  const isTheStartingTime = rowIndex == scheduleData.startingTime
  const isTheOutTime = rowIndex == scheduleData.outTime 
  const isTheLastColumn = colIndex == 5
  const isSelected = isOnColumnFocus && (isTheStartingTime || isTheOutTime)
  const isSelectableRange = isOnColumnFocus && 
      scheduleData.startingTime !== null && 
      scheduleData.outTime === null && 
      rowIndex > scheduleData.startingTime && 
      rowIndex < maxSelectableRows

  const cellClasses = "w-full h-8 border-x-1 border-gray-100 cursor-pointer hover:bg-gray-100 relative"
  const cellVariantClasses = clsx({
    "bg-gray-100 hover:bg-gray-200" : isOnColumnFocus,
    "shimmer": isSelectableRange || (isTheStartingTime && isOnColumnFocus && !scheduleData.outTime)
  })
  const selectedOutTimeClasses = clsx({
    "right-[70%]" : isTheLastColumn,
    "left-[70%]" : !isTheLastColumn
  }, "z-101  center -bottom-2 w-25  bg-blue-500 px-2 py-0.5 rounded-xl font-medium text-white text-[11px] absolute")
  const selectedStartingTimeClasses = clsx({
    "right-[70%]" : isTheLastColumn,
    "left-[70%]" : !isTheLastColumn
  }, "z-101  center -top-2 w-25 bg-blue-500 px-2 py-0.5 rounded-xl font-medium text-white text-[11px] absolute")
  const selectedStartingTimeLineClasses = "translate-y-1/2 z-100 w-full absolute h-0.5 bg-blue-500"
  const selectedOutTimeLineClasses = "-bottom-0 z-100 w-full absolute h-0.5 bg-blue-500"

  return (
    <div 
      className={`${cellClasses} ${cellVariantClasses}`}
      onClick={() => onClick(colIndex, rowIndex)}
      onMouseEnter={() => onMouseEnter(rowIndex)}
      onMouseLeave={onMouseLeave}
    >
      { isSelected && 
        <>
          {
            isTheStartingTime && 
            <>
              <div className={selectedStartingTimeClasses}>Starting Time</div>
              <div className={selectedStartingTimeLineClasses}></div>
            </>
          }
          {
            isTheOutTime && 
            <>
              <div className={selectedOutTimeClasses}>Out Time</div>
              <div className={selectedOutTimeLineClasses}></div>
            </>
          }
        </>
      }
    </div>
  )
}
export default TableCell