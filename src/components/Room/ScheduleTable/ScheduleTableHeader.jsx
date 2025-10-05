import clsx from "clsx"
import useRoom from "../../../hooks/useRoom"
import { getDay, getDaysSpan, getNextSevenDate, getNextSevenDateNumbers, getNextSevenDatesShortMonthNames, getSorted } from "../../../Utils/utils"
import { useEffect, useMemo } from "react"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config"

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ScheduleTableHeader = () => {
  const {schedule, handleSchedule, selectedTime, handleReservationDate, handleSelectedTime, reservation : {building, floor, room, date}} = useRoom()
  
  const numberByDaysOfNextSavenDays = getNextSevenDateNumbers()
  const monthNameOfNextSavenDays = getNextSevenDatesShortMonthNames()
  const nextSevenDaysDate = getNextSevenDate()
  const isTimeSelectionComplete = selectedTime.startingTime !== null && selectedTime.outTime !== null

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

  const sortedDate = useMemo(() => {
    return getSorted(nextSevenDaysDate, nextDayByWeekDay)
  }, [])

  // Track the changes for Date. So, if the user change the date value from the nav, the day focus of table will match
  useEffect(() => {
    if(!date) return

    const indexOfSelectedDate = sortedDate.findIndex(item => item === date)
    handleSchedule(prev => ({...prev, focus: indexOfSelectedDate}))
  }, [date])

  useEffect(() => {
    handleReservationDate(sortedDate[schedule.focus])
  }, [schedule.focus])

  const daysSpan = getDaysSpan(nextDayByWeekDay)

  const handleConfirmButton = () => {
    handleSchedule(prev => ({...prev, isConfirmed: true}))
  }

  // CLASSES
  const headerCellClasses = "px-2 font-semibold text-gray-700"
  const nextWeekClasses = "bg-green-300 h-5 text-center text-sm font-semibold text-white"
  const thisWeekClasses = "bg-green-400 h-5 text-center text-sm font-semibold text-white"
  const confirmButtonClasses = clsx({
    "bg-blue-500 text-white" : isTimeSelectionComplete,
    "bg-gray-200 text-gray-400 line-through" : !isTimeSelectionComplete,
  }, "cursor-pointer   px-3 py-1.5 text-xs rounded-xl font-medium")
  

  return (
    <div>
      <div className="px-4 py-1 flex">
        <div>
          <h2 className="text-xs text-gray-500">{`Blg. ${building} > Floor${floor} > Room${room}`}</h2>
          <h1 className="font-medium">
            <span className="text-green-500">ROOM {room} </span> 
            Available Schedule
          </h1>
        </div>
        <div className="flex p-1 flex-1 justify-end gap-4">
          <div className="text-black-text text-xs">
            <h1>Starting Time: {selectedTime.startingTime !== null ? TIME_SLOTS_30_MIN[selectedTime.startingTime] : "00:00"}</h1>
            <h1>Out Time: {selectedTime.outTime !== null ? TIME_SLOTS_30_MIN[selectedTime.outTime + 1] : "00:00"}</h1>
          </div>
          <button 
            onClick={handleConfirmButton}
            className={confirmButtonClasses}
          >
              Confirm Selected Time
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 pr-[8px]">
        <h1 className="bg-green-300"></h1>
        {!daysSpan.nextWeekSpan || <h1 style={{gridColumn: "span " + daysSpan.nextWeekSpan}} className={nextWeekClasses}>NEXT WEEK</h1>}
        {!daysSpan.thisWeekSpan || <h1 style={{gridColumn: "span " + daysSpan.thisWeekSpan}}  className={thisWeekClasses}>THIS WEEK</h1>}
      </div>
      <div className="grid grid-cols-7 mr-[8px] ">
      <h1 className="border-b border-b-gray-200 center font-medium border-r bg-white border-gray-300">TIME</h1>
      {
        DAYS_OF_WEEK.map((day, index) => {
          const buttonClasnames = clsx({
            "bg-gray-200": index === schedule.focus,
            "bg-white border-x border-b border-gray-100": index !== schedule.focus,
          }, "text-start flex transition-all duration-300 flex-col cursor-pointer top-0 p-1 text-xs")
          return(
            <button 
              key={index}
              onClick={() => {
                handleSchedule(prev => ({...prev, focus: index}))
                handleReservationDate(sortedDate[index])
                handleSelectedTime({startingTime: null, outTime: null})
              }} 
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