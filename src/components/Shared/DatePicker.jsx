import { formatDate } from "../../Utils/utils"

const DatePicker = ({minDate, maxDate, disabled, value, onChange}) => {
  return (
    <div className="relative">
      <input
        className="border-1 border-black/40 rounded-lg px-2 py-3 text-sm w-36 text-black-text" 
        type="date"
        min={minDate}
        max={maxDate}
        disabled={disabled}
        value={value || ""}
        onChange={onChange}
      />
      <h3 className="absolute -top-2 left-2.5 text-black/40 font-medium text-xs bg-white px-2">Date</h3>
    </div>
  )
}
export default DatePicker