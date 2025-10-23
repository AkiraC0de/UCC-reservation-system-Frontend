import TableContent from "./TableContent"
import TableHeader from "./TableHeader"
import TableWrapper from "./TableWrapper"
import { createContext, useContext, useEffect, useState, useMemo } from "react"
import { getDay, getSorted, getNextSevenDate, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames } from "../../../Utils/utils"

const ScheduleContext = createContext();

const ScheduleTable = ({scheduleData, handleScheduleData}) => {
  const [focus, setFocus] = useState(null)

  const handleFocus = (value) => {
    setFocus(value)
  }

  useEffect(() => {
    const weekFocus = sortedData.date.findIndex(item => item == scheduleData.date)
    setFocus(weekFocus)
  }, [scheduleData.startingTime, scheduleData.outTime, scheduleData.date])
  
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

  return (
    <ScheduleContext.Provider value={
      { scheduleData, handleScheduleData, 
        sortedData, focus, handleFocus}
    }>
      <TableWrapper>
          <TableHeader/>
          <TableContent/>
      </TableWrapper>
    </ScheduleContext.Provider>
  )
}

export const useScheduleContext = () => useContext(ScheduleContext)

export default ScheduleTable