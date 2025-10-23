import { useMemo } from "react"
import clsx from "clsx"
import { useScheduleContext } from "./ScheduleTable"
import HeaderDateButton from "./HeaderDateButton"

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const HeaderDateButtonList = () => {
  const {scheduleData, handleScheduleData, sortedData} = useScheduleContext()
  
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