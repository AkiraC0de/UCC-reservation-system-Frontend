import { useScheduleContext } from "./ScheduleTable"
import ScheduledTimeSlot from "../../Room/ScheduleTable/ScheduledTimeSlot"
import clsx from "clsx"

const TableCell = ({rowIndex, colIndex, onClick, onMouseEnter, onMouseLeave, maxSelectableRows, matchedData}) => {
  const { focus, scheduleData } = useScheduleContext()
  const height = `${matchedData?.hours * 200}%`

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
      {
          matchedData &&
          <ScheduledTimeSlot data={matchedData} height={height}/>
      }
    </div>
  )
}
export default TableCell