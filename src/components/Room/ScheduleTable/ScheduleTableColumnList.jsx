import { useMemo } from "react"
import { MOCK_DATA_RESERVATION } from "../../../configs/Room.config"
import ScheduledTimeSlot from "./ScheduledTimeSlot"

const ScheduleTableColumnList = () => {
  // TEMPORARY
  const MOCK_DATA = MOCK_DATA_RESERVATION
  const data = useMemo(() => {
    return MOCK_DATA.reduce((map, item) => {
      map[`${item.startingTime}-${item.weekDay}`] = item;
      return map;
    }, [])
  }, [MOCK_DATA])

  const cellClasses = " border-x border-gray-100 h-16 flex items-center justify-center text-sm"

  // # Render 6 Column that has 14 Row (Cell) from top to bottom
  return [...Array(6)].map((_, colIndex) => {
    return <div key={colIndex} className="grid grid-row-15">
      {
        [...Array(15)].map((_, rowIndex) => {
          const matchedData = data[`${rowIndex}-${colIndex}`]
          const height = `${matchedData?.hours * 100}%`
          return(
            <div 
              key={rowIndex}
              className={`${cellClasses} flex flex-col relative border-1`}>
              {
                matchedData &&
                <ScheduledTimeSlot data={matchedData} height={height}/>
              }
              <div className=" flex-1 w-full hover:bg-green-50"></div>
              <div className="flex-1 w-full hover:bg-green-50"></div>
            </div>
          )
        })
      }
    </div>
  })
}
export default ScheduleTableColumnList