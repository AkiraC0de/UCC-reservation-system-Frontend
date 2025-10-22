import HeaderDateButtonList from "./HeaderDateButtonList"

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const TableHeader = () => {
  const nextWeekClasses = "bg-green-300 h-5 text-center text-sm font-semibold text-white"
  const thisWeekClasses = "bg-green-400 h-5 text-center text-sm font-semibold text-white"
  const timeCellClasses = "border-b border-b-gray-200 center font-medium border-r bg-white border-gray-300"
  return (
    <div>
      {/* <div className="grid grid-cols-7 pr-[8px]">
        <h1 className="bg-green-300"></h1>
        {!daysSpan.nextWeekSpan || <h1 style={{gridColumn: "span " + daysSpan.nextWeekSpan}} className={nextWeekClasses}>NEXT WEEK</h1>}
        {!daysSpan.thisWeekSpan || <h1 style={{gridColumn: "span " + daysSpan.thisWeekSpan}}  className={thisWeekClasses}>THIS WEEK</h1>}
      </div> */}
      <div className="grid grid-cols-7 mr-[8px] ">
        <h1 className={timeCellClasses}>TIME</h1>
        <HeaderDateButtonList/>
      </div>
    </div>
  )
}
export default TableHeader