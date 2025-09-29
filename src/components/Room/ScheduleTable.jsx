import { useMemo } from "react"
import { MOCK_DATA_RESERVATION } from "../../configs/Room.config"
import { getDay, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames } from "../../Utils/utils"

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
  const timeLabelClasses = "flex flex-col items-center text-[11px] text-gray-600"
  const contentCellClasses = "flex flex-col transition duration-150 ease-in-out cursor-pointer"

  const numberByDaysOfNextSavenDays = getNextSevenDateNumbers()
  const monthNameOfNextSavenDays = getNextSevenDatesShortMonthNames()

  
  // Get the index of the day to day (Ex: monday = 1)
  // Then deduct 1 since the tables day start with monday add do not have Sunday Column
  // So mon = 0, tue = 1. Matched the daysOfWeek
  const nextDayByWeekDay = getDay() 
  console.log(nextDayByWeekDay)

  return (
    <div className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-sm">
      {/* Table Header Row (Days of the Week) */}
      <div className="grid grid-cols-7 text-[13px] sticky border-gray-300 mr-[10px]">
        <h1 className={`${headerCellClasses} flex justify-center border-r-1 border-gray-100 items-center w-full border-b-0`}>TIME</h1>
        {DAYS_OF_WEEK.map((day, index) => (
          <div key={index} className="p-1 border-x border-b border-gray-100">
            <h1 className={headerCellClasses}>
              {day}
            </h1>
            <h2 className="px-2 text-[16px]">
              {nextDayByWeekDay <= index ? numberByDaysOfNextSavenDays[index - nextDayByWeekDay] : numberByDaysOfNextSavenDays[5 - ((nextDayByWeekDay - index) - 1)]}
            </h2>
            <h2 className="px-2 text-[11px] text-gray-400">
              {nextDayByWeekDay <= index ? monthNameOfNextSavenDays[index - nextDayByWeekDay] : monthNameOfNextSavenDays[5 - ((nextDayByWeekDay - index) - 1)]}
            </h2>
          </div>
        ))}
      </div>

      {/* Table Content Rows (Time Slots) */}
      <div className="overflow-y-scroll max-h-[calc(100vh-160px)] scroll-bar-1">
        {TIME_SLOTS.map((time, rowIndex) => (
        <div 
          key={time.mid} 
          className="grid grid-cols-7 text-[13px]"
        >
          {/* Time Label Column */}
          <div className={`${cellClasses} ${timeLabelClasses} text-gray-800`}>
            <h2>{time.min}</h2>
            <h1 className="text-sm">{time.mid}</h1>
            <h2>{time.max}</h2>
          </div>

          {/* Schedule Content Cells (7 total columns including the time label) */}
          {[...Array(6)].map((_, colIndex) => {
            const matchedData = data[`${colIndex}-${rowIndex}`]
            const height = `${matchedData?.hours * 100}%`
            return(
              <div 
                key={`${time}-${colIndex}`} 
                className={`${cellClasses} ${contentCellClasses} text-gray-500 relative`}
              >
                {
                  matchedData &&
                  <div className=" w-full absolute top-0"
                    style={{height}}
                  >
                    <div className="h-15/16 w-13/14 bg-white border-blue-100 border-2 m-1 rounded-lg flex flex-col shadow-md p-2 text-xs gap-1.5">
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
          })}
        </div>
      ))}
      </div>
    </div>
  )
}

export default ScheduleTable;