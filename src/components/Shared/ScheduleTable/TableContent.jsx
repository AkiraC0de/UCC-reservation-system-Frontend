import TableTimeList from "./TableTimeList"
import TableColumn from "./TableColumn"
import TableCell from "./TableCell"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config.js"
import { useScheduleContext } from "./ScheduleTable.jsx"
import { useMemo } from "react"

const MAX_SELECTION_HOURS = 5

const TableContent = () => {
  const { scheduleData, 
    handleScheduleData, 
    sortedData, 
    focus, 
    handleCellBeingHovered
  } = useScheduleContext()

  const maxSelectableRows = useMemo(() => {
      const { startingTime, outTime } = scheduleData

      if (startingTime === null || outTime !== null) {
          return Infinity; // No starting time set, or selection is complete
      }

      let maxLimit = startingTime + MAX_SELECTION_HOURS * 2
      let barrier = maxLimit

      // 1. Check from startingTime + 1 up to the MAX_SELECTION_HOURS limit
      for (let i = startingTime + 1; i <= maxLimit; i++) {
          const matchedData = false
          //const matchedData = dataMap[`${i}-${colIndex}`]
          if (matchedData) {
              // Found a reservation! Set the barrier to the cell *before* the reservation.
              barrier = i
              break
          }
      }
      
      // The maximum selectable rowIndex is now the barrier
      return barrier;
  }, [scheduleData])

  const handleCellClick = (colIndex, rowIndex) => {
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
        if (rowIndex >= maxSelectableRows) {
            return // Cannot select time at or after the barrier (max limit or existing reservation)
        }
    }

    // 1. Set starting time (if neither is set)
    if (scheduleData.startingTime === null && scheduleData.outTime === null) { 
      handleScheduleData("startingTime", rowIndex)
      handleScheduleData("outTime", null)
    } 
    // 2. Set ending time (if starting is set, but ending isn't)
    else if (scheduleData.startingTime !== null && scheduleData.outTime === null) { 
      handleScheduleData("outTime", rowIndex)
    } 
    // 3. Reset and start a new selection
    else {
      // Clear the old range and start a new one
      handleScheduleData("startingTime", rowIndex)
      handleScheduleData("outTime", null)
    }
  }

  const handleCellOnMouseEnter = (rowIndex) => {
    handleCellBeingHovered(rowIndex)
  }

  const handleCellOnMouseLeave = () => {
    handleCellBeingHovered(null)
  }

  const tableContentClass = "grid grid-cols-7 max-h-[calc(100vh-220px)] overflow-y-scroll overflow-x-clip scroll-bar-1"
  return (
    <div className={tableContentClass}>
      <TableTimeList/>
      {
        [...Array(6)].map((_, colIndex) => (
          <TableColumn key={colIndex}>
              {TIME_SLOTS_30_MIN.map((_, rowIndex) => (
                <TableCell 
                key={rowIndex} 
                onClick={handleCellClick}
                onMouseEnter={handleCellOnMouseEnter}
                onMouseLeave={handleCellOnMouseLeave}
                maxSelectableRows={maxSelectableRows}
                colIndex={colIndex} 
                rowIndex={rowIndex}
              />
              ))}
          </TableColumn>
        ))
      }
    </div>
  )
}
export default TableContent