import clsx from "clsx"

const MatchedDataCard = ({data, height}) => {
  const {purpose, prof, program, section, type, reservedBy} = data

  const mainClass = clsx({
    "border-orange-200" : type.toLowerCase() === "plotted",
    "border-green-200" : type.toLowerCase() === "reserved",
  }, "h-[99%] w-13/14 bg-white overflow-hidden border-1 mx-1 rounded-lg flex flex-col shadow-md p-2 text-[11px] gap-2")
  
  const typeClass = clsx({
    "bg-orange-100 text-orange-500" : type.toLowerCase() === "plotted",
    "bg-green-100 text-green-500" : type.toLowerCase() === "reserved"
  }, "w-fit  px-2 py-0.5 rounded-lg text-[11px] font-medium")

  return (
    <button 
      className="absolute top-0 z-50 w-full cursor-pointer text-start"
      style={{height}}
    >
      <div className={mainClass}>
        <h2 className={typeClass}>{type}</h2>
        <h1 className="text-black-text w-fit font-semibold text-sm">{purpose}</h1>
        { reservedBy && <h1>Reserved by: {reservedBy.firstName} {reservedBy.lastName}</h1> }
        { prof && <h3>Proffessor: {prof}</h3> }
        <h3>Program: {program || reservedBy.program}</h3>
        <h3>Section: {section || reservedBy.yearLevel + reservedBy.section}</h3>
      </div>
    </button>
  )
}

export default MatchedDataCard