const TableTimeCell = ({time}) => {
  const timeLabelClasses = "transition-all duration-300 cursor-pointer h-16 gap-0.5 flex flex-col justify-center items-center text-[11px] border-r border-l-0 border-gray-300 text-gray-800"
  // const timeMinClasses = `${isEven && isAtStarting && "bg-green-400 text-white px-2 rounded-xl"} transition-all duration-200`
  // const timeMidClases = `${!isEven && focus && !isAtStarting && "bg-green-400 text-white font-semibold px-2 rounded-xl"} transition-all duration-300`
  // const timeMaxClasses = `${!isEven && focus && !isAtStarting && "bg-green-400 text-white font-semibold px-2 rounded-xl"} transition-all duration-300`
  
  return (
    <div 
      className={timeLabelClasses}
    >
      <h2 className={""}>
        {time.min}
      </h2>
      <h1 className={""}>
        {time.mid}
      </h1>
      <h2 className={""}>
        {time.max}
      </h2>
    </div>
  )
}
export default TableTimeCell