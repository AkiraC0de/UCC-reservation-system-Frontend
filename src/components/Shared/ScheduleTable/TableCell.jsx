import { useScheduleContext } from "./ScheduleTable"
import clsx from "clsx"

const TableCell = ({rowIndex, colIndex, onClick, onMouseEnter, onMouseLeave}) => {
  const { focus } = useScheduleContext()
  
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

  const cellClasses = "w-full h-8 border-x-1 border-gray-100 cursor-pointer hover:bg-gray-100"
  const cellVariantClasses = clsx({
    "bg-gray-100 hover:bg-gray-200" : isOnColumnFocus
  })

  return (
    <div 
      className={`${cellClasses} ${cellVariantClasses}`}
      onClick={() => onClick(colIndex, rowIndex)}
      onMouseEnter={() => onMouseEnter(rowIndex)}
      onMouseLeave={onMouseLeave}
    >

    </div>
  )
}
export default TableCell