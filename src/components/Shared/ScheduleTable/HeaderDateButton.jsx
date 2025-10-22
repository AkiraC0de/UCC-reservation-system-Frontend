

const HeaderDateButton = ({className, dayName, dayNumber, dayMonth, onClick}) => {
  const headerCellClasses = "px-2 font-semibold text-gray-700"

  return (
    <button 
      onClick={onClick} 
      className={className}>
      <h1 className={headerCellClasses}>
        {dayName}
      </h1>
      <h2 className="px-2 text-[16px]">
        {dayNumber}
      </h2>
      <h2 className="px-2 text-[11px] text-gray-400">
        {dayMonth}
      </h2>
    </button>
  )
}
export default HeaderDateButton