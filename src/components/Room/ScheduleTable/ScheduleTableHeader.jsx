import clsx from "clsx"
import useRoom from "../../../hooks/useRoom"
import { getDay, getDaysSpan, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames, getSorted } from "../../../Utils/utils"
import { useMemo } from "react"

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ScheduleTableHeader = () => {
  const {schedule, handleSchedule} = useRoom()

  const numberByDaysOfNextSavenDays = getNextSevenDateNumbers()
  const monthNameOfNextSavenDays = getNextSevenDatesShortMonthNames()

  // Get the index of the day to day (Ex: monday = 1)
  // Then deduct 1 since the tables day start with monday add do not have Sunday Column
  // So mon = 0, tue = 1. Matched the daysOfWeek
  const nextDayByWeekDay = getDay() 

  const sortedDay = useMemo(() => {
    return getSorted(numberByDaysOfNextSavenDays, nextDayByWeekDay)
  }, [])

  const sortedMonth = useMemo(() => {
    return getSorted(monthNameOfNextSavenDays, nextDayByWeekDay)
  }, [])

  const daysSpan = getDaysSpan(nextDayByWeekDay)

  const headerCellClasses = "px-2 font-semibold text-gray-700"
  const nextWeekColSpan = `col-span-[${daysSpan.nextWeekSpan}]`
  const thisWeekColSpan = `col-span-[${daysSpan.thisWeekSpan}]`
  const nextWeekClasses = clsx(
    "bg-green-300 h-5 text-center text-sm font-semibold text-white",
    nextWeekColSpan
  )
  const thisWeekClasses = clsx(
    "bg-green-400 h-5 text-center text-sm font-semibold text-white",
    thisWeekColSpan
  )

  return (
    <div>
      <div className="grid grid-cols-7 pr-[8px]">
        <h1 className="bg-green-300"></h1>
        <h1 className={nextWeekClasses}>NEXT WEEK</h1>
        <h1 className={thisWeekClasses}>THIS WEEK</h1>
      </div>
      <div className="grid grid-cols-7 mr-[8px] ">
      <h1 className="border-b border-b-gray-200 center font-medium border-r bg-white border-gray-300">TIME</h1>
      {
        DAYS_OF_WEEK.map((day, index) => {
          const buttonClasnames = clsx({
            "bg-green-200": index === schedule.focus,
            "bg-white border-x border-b border-gray-100": index !== schedule.focus,
          }, "text-start flex transition-all duration-300 flex-col cursor-pointer top-0 p-1 text-xs")
          return(
            <button 
              key={index}
              onClick={() => handleSchedule(prev => ({...prev, focus: index}))} 
              className={buttonClasnames}>
              <h1 className={headerCellClasses}>
                {day}
              </h1>
              <h2 className="px-2 text-[16px]">
                {sortedDay[index]}
              </h2>
              <h2 className="px-2 text-[11px] text-gray-400">
                {sortedMonth[index]}
              </h2>
            </button>
          )})
        }
      </div>
    </div>
  )
}
export default ScheduleTableHeader