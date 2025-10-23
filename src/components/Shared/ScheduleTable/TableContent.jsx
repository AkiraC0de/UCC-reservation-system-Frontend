import TableTimeList from "./TableTimeList"
import TableColumn from "./TableColumn"
import TableCell from "./TableCell"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config.js"
import { useScheduleContext } from "./ScheduleTable.jsx"

const TableContent = () => {
  const { scheduleData, 
    handleScheduleData, 
    sortedData, 
    focus, 
    handleCellBeingHovered
  } = useScheduleContext()

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