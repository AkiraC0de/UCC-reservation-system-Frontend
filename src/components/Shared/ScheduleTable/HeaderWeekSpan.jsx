import { getDaysSpan, getDay } from "../../../Utils/utils"

const HeaderWeekSpan = () => {
  const nextDayByWeekDay = getDay()
  const daysSpan = getDaysSpan(nextDayByWeekDay)

  const nextWeekClasses = "bg-green-300 h-5 text-center text-sm font-semibold text-white"
  const thisWeekClasses = "bg-green-400 h-5 text-center text-sm font-semibold text-white"

  return (
    <div className="grid grid-cols-7 pr-[8px]">
      <h1 className="bg-green-300"></h1>
      {!daysSpan.nextWeekSpan || <h1 style={{gridColumn: "span " + daysSpan.nextWeekSpan}} className={nextWeekClasses}>NEXT WEEK</h1>}
      {!daysSpan.thisWeekSpan || <h1 style={{gridColumn: "span " + daysSpan.thisWeekSpan}}  className={thisWeekClasses}>THIS WEEK</h1>}
    </div>
  )
}
export default HeaderWeekSpan