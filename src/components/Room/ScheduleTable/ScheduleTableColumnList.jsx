import { useMemo, useState } from "react"
import { MOCK_DATA_RESERVATION } from "../../../configs/Room.config"
import ScheduledTimeSlot from "./ScheduledTimeSlot"
import useRoom from "../../../hooks/useRoom"
import clsx from "clsx"

const ScheduleTableColumnList = () => {
  const { schedule, handleSchedule } = useRoom() 
  const [selectedTime, setSelectedTime] = useState({
      staringTime: null, 
      outTime: null 
  })

  // Updated handleCellClick function
  const handleCellClick = (colIndex, rowIndex) => {
    handleSchedule(prev => ({...prev, focus: colIndex}))

    // 1. Set starting time (if neither is set)
    if (selectedTime.staringTime === null && selectedTime.outTime === null) { 
      setSelectedTime({ staringTime: rowIndex, outTime: null });
    } 
    // 2. Set ending time (if starting is set, but ending isn't)
    else if (selectedTime.staringTime !== null && selectedTime.outTime === null) { 
      setSelectedTime(prev => ({...prev, outTime: rowIndex}));
    } 
    // 3. Reset and start a new selection
    else {
      // Clear the old range and start a new one
      setSelectedTime({ staringTime: rowIndex, outTime: null });
    }
  }

  // TEMPORARY
  const MOCK_DATA = MOCK_DATA_RESERVATION
  const data = useMemo(() => {
    return MOCK_DATA.reduce((map, item) => {
      map[`${item.startingTime}-${item.weekDay}`] = item;
      return map;
    }, [])
  }, [MOCK_DATA])
  console.log(selectedTime)

  const cellClasses = "cursor-pointer border-x border-gray-100 h-8 flex items-center justify-center text-sm  flex flex-col relative"

  // # Render 6 Column that has 14 Row (Cell) from top to bottom
  return [...Array(6)].map((_, colIndex) => {
    return <div key={colIndex} className="grid grid-row-15">
      {
        [...Array(30)].map((_, rowIndex) => {
          const matchedData = data[`${rowIndex}-${colIndex}`]
          const height = `${matchedData?.hours * 200}%`
          const cellVariantClasses = clsx({
            "bg-amber-200 hover:bg-amber-200" : rowIndex === selectedTime.staringTime && colIndex === schedule.focus,
            "bg-gray-100 hover:bg-green-200" : colIndex === schedule.focus && rowIndex !== selectedTime.staringTime && rowIndex !== selectedTime.outTime,
            "bg-blue-400 hover:bg-blue-400" : rowIndex === selectedTime.outTime && colIndex === schedule.focus,
            "hover:bg-green-50" : colIndex != schedule.focus
          })
          return(
            <div 
              key={rowIndex}
              onClick={() => handleCellClick(colIndex, rowIndex)}
              className={`${cellClasses} ${cellVariantClasses}`}
              >
              {
                matchedData &&
                <ScheduledTimeSlot data={matchedData} height={height}/>
              }
            </div>
          )
        })
      }
    </div>
  })
}
export default ScheduleTableColumnList