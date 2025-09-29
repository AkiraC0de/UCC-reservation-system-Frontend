const ScheduleTableTimeLabel = ({time}) => {
  const timeLabelClasses = "cursor-pointer h-16 flex flex-col justify-center items-center text-[11px] border-r border-l-0 border-gray-300 text-gray-800"

  return (
    <div 
      className={timeLabelClasses}
    >
      <h2>{time.min}</h2>
      <h1 className="text-sm">{time.mid}</h1>
      <h2>{time.max}</h2>
    </div>
  )
}
export default ScheduleTableTimeLabel