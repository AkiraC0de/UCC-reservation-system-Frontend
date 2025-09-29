import { useMemo } from "react"
import { MOCK_DATA_RESERVATION } from "../../../configs/Room.config"
import { getDay, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames } from "../../../Utils/utils"
import ScheduleTableTimeLabel from "./ScheduleTableTimeLabel"

const TIME_SLOTS = [
  { min: "7:00 AM", mid: "7:30 AM", max: "7:59 AM" },
  { min: "8:00 AM", mid: "8:30 AM", max: "8:59 AM" },
  { min: "9:00 AM", mid: "9:30 AM", max: "9:59 AM" },
  { min: "10:00 AM", mid: "10:30 AM", max: "10:59 AM" },
  { min: "11:00 AM", mid: "11:30 AM", max: "11:59 AM" },
  { min: "12:00 PM", mid: "12:30 PM", max: "12:59 PM" },
  { min: "1:00 PM", mid: "1:30 PM", max: "1:59 PM" },
  { min: "2:00 PM", mid: "2:30 PM", max: "2:59 PM" },
  { min: "3:00 PM", mid: "3:30 PM", max: "3:59 PM" },
  { min: "4:00 PM", mid: "4:30 PM", max: "4:59 PM" },
  { min: "5:00 PM", mid: "5:30 PM", max: "5:59 PM" },
  { min: "6:00 PM", mid: "6:30 PM", max: "6:59 PM" },
  { min: "7:00 PM", mid: "7:30 PM", max: "7:59 PM" },
  { min: "8:00 PM", mid: "8:30 PM", max: "8:59 PM" },
  { min: "9:00 PM", mid: "9:30 PM", max: "9:59 PM" }
]

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ScheduleTable = () => {

  // TEMPORARY
  const MOCK_DATA = MOCK_DATA_RESERVATION
  const data = useMemo(() => {
    return MOCK_DATA.reduce((map, item) => {
      map[`${item.startingTime}-${item.weekDay}`] = item;
      return map;
    }, [])
  }, [MOCK_DATA])


  const cellClasses = " border-x border-gray-100 h-16 flex items-center justify-center text-sm"
  const headerCellClasses = "px-2 font-semibold text-gray-700"

  const numberByDaysOfNextSavenDays = getNextSevenDateNumbers()
  const monthNameOfNextSavenDays = getNextSevenDatesShortMonthNames()

  
  // Get the index of the day to day (Ex: monday = 1)
  // Then deduct 1 since the tables day start with monday add do not have Sunday Column
  // So mon = 0, tue = 1. Matched the daysOfWeek
  const nextDayByWeekDay = getDay() 
  console.log(nextDayByWeekDay)

  return(
    <div className="bg-white w-full relative max-w-4xl mx-auto rounded-lg shadow-sm overflow-hidden">
      <div className="grid grid-cols-7 mr-[10px]">
        <h1 className="border-b border-b-gray-200 center font-medium border-r bg-white border-gray-300">TIME</h1>
        {
          DAYS_OF_WEEK.map((day, colIndex) => {
            return(
              <div key={colIndex} className=" flex flex-col bg-white top-0 p-1 border-x border-b border-gray-100 text-xs">
                <h1 className={headerCellClasses}>
                  {day}
                </h1>
                <h2 className="px-2 text-[16px]">
                  {nextDayByWeekDay <= colIndex ? numberByDaysOfNextSavenDays[colIndex - nextDayByWeekDay] : numberByDaysOfNextSavenDays[5 - ((nextDayByWeekDay - colIndex) - 1)]}
                </h2>
                <h2 className="px-2 text-[11px] text-gray-400">
                  {nextDayByWeekDay <= colIndex ? monthNameOfNextSavenDays[colIndex - nextDayByWeekDay] : monthNameOfNextSavenDays[5 - ((nextDayByWeekDay - colIndex) - 1)]}
                </h2>
              </div>
          )})
        }
        
      </div>

      <div className="grid grid-cols-7 max-h-[calc(100vh-160px)] overflow-y-scroll scroll-bar-1">
        
        <div className="grid grid-rows-15 ">
          
          {TIME_SLOTS.map((time, index) => (
            <ScheduleTableTimeLabel 
              key={index}
              time={time}
            />
          ))}
        </div>
          {
          DAYS_OF_WEEK.map((_, colIndex) => {
            return(
              <div className="grid grid-row-15">
                {
                  [...Array(14)].map((_, rowIndex) => {
                    const matchedData = data[`${rowIndex}-${colIndex}`]
                    const height = `${matchedData?.hours * 100}%`
                    return(
                      <div className={`${cellClasses} flex flex-col relative`}>
                        {
                          matchedData &&
                          <div className="absolute top-0 z-50 w-full"
                            style={{height}}
                          >
                            <div className="h-15/16 w-13/14 bg-white overflow-hidden border-blue-100 border-2 mx-1 rounded-lg flex flex-col shadow-md p-2 text-xs gap-1.5">
                              <h2 className="bg-blue-100 w-fit text-blue-500 px-2 py-0.5 rounded-lg text-[11px] font-medium">{matchedData.type}</h2>
                              <h1 className="text-black-text w-fit font-medium">{matchedData.purpose}</h1>
                              <h3 className="text-[11px]">Proffessor: {matchedData.prof}</h3>
                              <h3 className="text-[11px]">Program: {matchedData.program}</h3>
                              <h3 className="text-[11px]">Section: {matchedData.section}</h3>
                            </div>
                          </div>
                        }
                        <div className=" flex-1 w-full hover:bg-green-50"></div>
                        <div className="flex-1 w-full hover:bg-green-50"></div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default ScheduleTable;