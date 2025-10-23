import clsx from "clsx"

const TableTimeCell = ({time, isTimeSecondCell, isBeingHovered, isOnStartingTimeSelection}) => {
  const timeLabelClasses = "transition-all duration-300 cursor-pointer h-16 gap-0.5 flex flex-col justify-center items-center text-[11px] border-r border-l-0 border-gray-300 text-gray-800"
  const timeMinClasses = clsx({ "bg-green-400 text-white px-2 rounded-xl" : !isTimeSecondCell && isOnStartingTimeSelection && isBeingHovered }, "transition-all duration-200")
  const timeMidClases = clsx({"bg-green-400 text-white font-semibold px-2 rounded-xl" : isBeingHovered && ((isOnStartingTimeSelection && isTimeSecondCell) || (!isOnStartingTimeSelection && !isTimeSecondCell))}, "text-sm transition-all duration-200")
  const timeMaxClasses = clsx({ "bg-green-400 text-white font-semibold px-2 rounded-xl" : isTimeSecondCell && isBeingHovered && !isOnStartingTimeSelection }, "transition-all duration-200")
  
  return (
    <div 
      className={timeLabelClasses}
    >
      <h2 className={timeMinClasses}>
        {time.min}
      </h2>
      <h1 className={timeMidClases}>
        {time.mid}
      </h1>
      <h2 className={timeMaxClasses}>
        {time.max}
      </h2>
    </div>
  )
}
export default TableTimeCell