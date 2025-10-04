
const ScheduleTableTimeLabel = ({time, focus, isEven, isAtStarting}) => {
  const timeLabelClasses = "transition-all duration-300 cursor-pointer h-16 gap-0.5 flex flex-col justify-center items-center text-[11px] border-r border-l-0 border-gray-300 text-gray-800"

  return (
    <div 
      className={timeLabelClasses}
    >
      <h2 className={`${isEven && isAtStarting && "bg-green-400 text-white px-2 rounded-xl"} transition-all duration-200`}>{time.min}</h2>
      <h1 className={`${focus && (isAtStarting && !isEven || !isAtStarting && isEven) && "font-medium bg-green-500 text-white px-2 rounded-xl"} text-sm transition-all duration-300`}>{time.mid}</h1>
      <h2 className={`${!isEven && focus && !isAtStarting && "bg-green-400 text-white font-semibold px-2 rounded-xl"} transition-all duration-300`}>{time.max}</h2>
    </div>
  )
}
export default ScheduleTableTimeLabel