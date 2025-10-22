import { useMemo } from "react"
import clsx from "clsx"
import { getDay, getSorted, getNextSevenDate, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames } from "../../../Utils/utils"
import { useScheduleContext } from "./ScheduleTable"
import HeaderDateButton from "./HeaderDateButton"

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const HeaderDateButtonList = () => {
  const {scheduleData, handleScheduleData} = useScheduleContext()
  
    // Get the Day based on week. Example Mon = 1, Tue = 2
    const nextDayByWeekDay = getDay()
  
    const sortedData = useMemo(() => {
      // Get the list of day number of the next seven days. (1-31)
      const numberByDaysOfNextSavenDays = getNextSevenDateNumbers()
      // Get the list of month of the next serven days.
      const monthNameOfNextSavenDays = getNextSevenDatesShortMonthNames()
      // Get the Exact date of the next seven days based on of format year-month-day
      const nextSevenDaysDate = getNextSevenDate()
  
      // Then Sort it to matched the calandar.
      // Example: if today is October 23, 2025 Thu. 
      // Then the Oct 24 Fri (first on servenDateNumbers) should be at index 4, matches the DAYS_OF_WEEK
      return (
        {
          day: getSorted(numberByDaysOfNextSavenDays, nextDayByWeekDay),
          month: getSorted(monthNameOfNextSavenDays, nextDayByWeekDay),
          date: getSorted(nextSevenDaysDate, nextDayByWeekDay)
        }
      )
    }, [])
  
  
    const weekDayFocus = sortedData.date.findIndex(date => date == scheduleData.date)

  return (
    <>
      {
        DAYS_OF_WEEK.map((day, index) => {
          const buttonClasnames = clsx({
            "bg-gray-200": index === weekDayFocus,
            "bg-white border-x border-b border-gray-100": index !== weekDayFocus,
          }, "text-start flex transition-all duration-300 flex-col cursor-pointer top-0 p-1 text-xs")

          const handleClick = () => {
            handleScheduleData("date", sortedData.date[index])
          }

          return(
            <HeaderDateButton 
              key={index} 
              dayName={day}
              dayNumber={sortedData.day[index]}
              dayMonth={sortedData.month[index]}
              className={buttonClasnames} 
              onClick={handleClick}
            />
        )})
      }
    </>
  )
}
export default HeaderDateButtonList