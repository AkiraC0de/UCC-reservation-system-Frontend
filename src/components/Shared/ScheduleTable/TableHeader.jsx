import HeaderDateButtonList from "./HeaderDateButtonList"
import HeaderWeekSpan from "./HeaderWeekSpan"

const TableHeader = () => {
  const timeCellClasses = "border-b border-b-gray-200 center font-medium border-r bg-white border-gray-300"
  return (
    <div>
      <HeaderWeekSpan/>
      <div className="grid grid-cols-7 mr-[8px] ">
        <h1 className={timeCellClasses}>TIME</h1>
        <HeaderDateButtonList/>
      </div>
    </div>
  )
}
export default TableHeader