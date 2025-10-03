const SelectV2 = ({label = "", options = [], className = "", placeholder}) => {
  const parentClass = `${className} relative h-11`

  return (
    <div className={parentClass}>
      <select defaultValue="NaN" className="peer w-full text-xs overflow-hidden px-1 py-3 border border-text-black rounded-sm focus:outline-green-500 focus:border-green-500 focus:border-2">
        <option disabled hidden value="NaN">{placeholder}</option>
        {options.map(item => {
          return <option key={item.value || item.label} className="text-xs" value={item.value  || item.label}>{item.label}</option>
        })}
      </select>
      <h2 className="peer-focus:text-green-500 px-2 text-xs bg-white absolute -top-2 font-medium left-2 text-black-text">{label}</h2>
    </div>
  )
}
export default SelectV2