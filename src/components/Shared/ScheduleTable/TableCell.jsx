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
  const isSelected = isOnColumnFocus && (isTheStartingTime || rowIndex == scheduleData.outTime)
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
  const selectedLabelClasses = clsx({
    "-top-2 w-25 left-[70%]": isTheStartingTime,
    "-bottom-2 w-20 left-[84%]": !isTheStartingTime,
  }, "z-101  center  bg-blue-500 px-2 py-0.5 rounded-xl font-medium text-white text-[11px] absolute")
  const selectedLabelLineClasses = clsx({
    "translate-y-1/2": isTheStartingTime,
    "bottom-0": !isTheStartingTime,
  }, "z-100 w-full absolute h-0.5 bg-blue-500")

  return (
    <div 
      className={`${cellClasses} ${cellVariantClasses}`}
      onClick={() => onClick(colIndex, rowIndex)}
      onMouseEnter={() => onMouseEnter(rowIndex)}
      onMouseLeave={onMouseLeave}
    >
      { isSelected && 
        <>
          <div className={selectedLabelClasses}>
            {isTheStartingTime ? "Starting Time" : "Out Time"}
          </div>
          <div className={selectedLabelLineClasses}></div>
        </>
      }
    </div>
  )
}
export default TableCell