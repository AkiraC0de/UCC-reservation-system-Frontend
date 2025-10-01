import ScheduleTableTimeList from "./ScheduleTableTimeList"
import ScheduleTableHeader from "./ScheduleTableHeader"
import ScheduleTableColumnList from "./ScheduleTableColumnList"

const ScheduleTable = () => {
  const tableClass = "bg-white w-full relative max-w-4xl mx-auto rounded-lg shadow-sm overflow-hidden"
  const tableContentClass = "grid grid-cols-7 max-h-[calc(100vh-220px)] overflow-y-scroll scroll-bar-1"
  
  return(
    <div className={tableClass}>
      <ScheduleTableHeader/>
      <div className={tableContentClass}>
        {/* #1 Column: Time table list */}
        <ScheduleTableTimeList/>
        {/* #2 to #7 Column: Empty Cells */}
        <ScheduleTableColumnList/>
      </div>
    </div>
  )
}

export default ScheduleTable;