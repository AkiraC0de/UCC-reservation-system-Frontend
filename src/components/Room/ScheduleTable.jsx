
const timeSlots = [
  { min: "7:00 AM", mid: "7:30 AM", max: "7:59 AM" },
  { min: "8:00 AM", mid: "8:30 AM", max: "8:59 AM" },
  { min: "9:00 AM", mid: "9:30 AM", max: "9:59 AM" },
  { min: "10:00 AM", mid: "10:30 AM", max: "10:59 AM" },
  { min: "11:00 AM", mid: "11:30 AM", max: "11:59 AM" },
  { min: "12:00 PM", mid: "12:30 PM", max: "12:59 PM" },
  { min: "1:00 PM", mid: "1:30 PM", max: "1:59 PM" },
  { min: "2:00 PM", mid: "2:30 PM", max: "2:59 PM" },
  { min: "3:00 PM", mid: "3:30 PM", max: "3:59 PM" },
  { min: "4:00 PM", mid: "4:30 PM", max: "4:59 PM" },
  { min: "5:00 PM", mid: "5:30 PM", max: "5:59 PM" },
  { min: "6:00 PM", mid: "6:30 PM", max: "6:59 PM" },
  { min: "7:00 PM", mid: "7:30 PM", max: "7:59 PM" },
  { min: "8:00 PM", mid: "8:30 PM", max: "8:59 PM" },
  { min: "9:00 PM", mid: "9:30 PM", max: "9:59 PM" }
];
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ScheduleTable = () => {
  const cellClasses = " border-x border-gray-200 h-15 flex items-center justify-center text-sm"
  const headerCellClasses = "px-2 font-semibold text-gray-700"
  const timeLabelClasses = "flex flex-col items-center text-[11px] bg-gray-100 text-gray-600"
  const contentCellClasses = "hover:bg-blue-50 transition duration-150 ease-in-out cursor-pointer"

  return (
    <div className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-sm">
      {/* Table Header Row (Days of the Week) */}
      <div className="grid grid-cols-7 text-[13px] sticky border-b border-gray-300 mr-[10px]">
        <h1 className={`${headerCellClasses} w-full`}></h1>
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-1 border-x border-gray-200">
            <h1 className={headerCellClasses}>
              {day}
            </h1>
            <h2 className="px-2 text-md">
              22
            </h2>
          </div>
        ))}
      </div>

      {/* Table Content Rows (Time Slots) */}
      <div className="overflow-y-scroll max-h-[calc(100vh-150px)] scroll-bar-1">
        {timeSlots.map((time, rowIndex) => (
        <div 
          key={time.mid} 
          className="grid grid-cols-7 text-[13px]"
        >
          {/* Time Label Column */}
          <div className={`${cellClasses} ${timeLabelClasses} text-gray-800`}>
            <h2>{time.min}</h2>
            <h1 className="text-sm">{time.mid}</h1>
            <h2>{time.max}</h2>
          </div>

          {/* Schedule Content Cells (7 total columns including the time label) */}
          {[...Array(6)].map((_, colIndex) => (
            <div 
              key={`${time}-${colIndex}`} 
              className={`${cellClasses} ${contentCellClasses} text-gray-500`}
            >
              {
                (rowIndex === 0 && colIndex === 0) ? (
                  <span className="bg-green-200 text-green-800 p-1 rounded-md text-xs font-medium">Meeting</span>
                ) : (
                  '...'
                )
              }
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  )
}

export default ScheduleTable;