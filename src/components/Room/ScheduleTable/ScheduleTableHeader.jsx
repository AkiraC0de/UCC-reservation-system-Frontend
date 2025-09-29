import clsx from "clsx"
import useRoom from "../../../hooks/useRoom"
import { getDay, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames } from "../../../Utils/utils"

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ScheduleTableHeader = () => {
  const {schedule, handleSchedule} = useRoom()

  const numberByDaysOfNextSavenDays = getNextSevenDateNumbers()
  const monthNameOfNextSavenDays = getNextSevenDatesShortMonthNames()

  // Get the index of the day to day (Ex: monday = 1)
  // Then deduct 1 since the tables day start with monday add do not have Sunday Column
  // So mon = 0, tue = 1. Matched the daysOfWeek
  const nextDayByWeekDay = getDay() 
  const headerCellClasses = "px-2 font-semibold text-gray-700"

  return (
    <div className="grid grid-cols-7 mr-[8px] ">
      <h1 className="border-b border-b-gray-200 center font-medium border-r bg-white border-gray-300">TIME</h1>
      {
        DAYS_OF_WEEK.map((day, index) => {
          const buttonClasnames = clsx({
            "bg-green-100 border-2 border-green-300": index === schedule.focus,
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
                {nextDayByWeekDay <= index ? numberByDaysOfNextSavenDays[index - nextDayByWeekDay] : numberByDaysOfNextSavenDays[5 - ((nextDayByWeekDay - index) - 1)]}
              </h2>
              <h2 className="px-2 text-[11px] text-gray-400">
                {nextDayByWeekDay <= index ? monthNameOfNextSavenDays[index - nextDayByWeekDay] : monthNameOfNextSavenDays[5 - ((nextDayByWeekDay - index) - 1)]}
              </h2>
            </button>
        )})
      }
    </div>
  )
}
export default ScheduleTableHeader