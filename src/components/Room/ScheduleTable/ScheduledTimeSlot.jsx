import clsx from "clsx"

const ScheduledTimeSlot = ({data, height}) => {
  const {purpose, prof, program, section, type} = data

  const mainClass = clsx({
    "border-orange-100" : type.toLowerCase() === "plotted",
    "border-green-100" : type.toLowerCase() === "reserved",
  }, "h-[99%] w-13/14 bg-white overflow-hidden border-2 mx-1 rounded-lg flex flex-col shadow-md p-2 text-[11px] gap-1.5")
  
  const typeClass = clsx({
    "bg-orange-100 text-orange-500" : type.toLowerCase() === "plotted",
    "bg-green-100 text-green-500" : type.toLowerCase() === "reserved"
  }, "w-fit  px-2 py-0.5 rounded-lg text-[11px] font-medium")

  return (
    <div className="absolute top-0 z-50 w-full"
      style={{height}}
    >
      <div className={mainClass}>
        <h2 className={typeClass}>
          {type}
        </h2>
        <h1 className="text-black-text w-fit font-medium">
          {purpose}
        </h1>
        <h3>
          Proffessor: {prof}
        </h3>
        <h3>
          Program: {program}
        </h3>
        <h3>
          Section: {section}
        </h3>
      </div>
    </div>
  )
}
export default ScheduledTimeSlot