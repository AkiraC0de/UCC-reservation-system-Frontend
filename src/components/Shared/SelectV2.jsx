const SelectV2 = ({
  label = "", 
  options = [], 
  className = "", 
  placeholder = "Select an option", 
  value = "", 
  onChange = () => {},
  disabled = false,
  error = false
}) => {
  const parentClass = `${className} relative h-11`
  const selectId = `select-${label.replace(/\s+/g, '-').toLowerCase()}`
  
  return (
    <div className={parentClass}>
      <select 
        id={selectId}
        value={value} 
        onChange={onChange}
        disabled={disabled}
        className={`peer w-full text-xs overflow-hidden px-1 py-3 border rounded-sm 
          ${error ? 'border-red-500' : 'border-text-black'} 
          focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
          disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option 
            key={item.value || item.label || index} 
            className="text-xs" 
            value={item.value || item.label}
          >
            {item.label}
          </option>
        ))}
      </select>
      <label 
        htmlFor={selectId}
        className={`peer-focus:text-green-500 px-2 text-xs bg-white absolute -top-2 
          font-medium left-2 transition-colors
          ${error ? 'text-red-500' : 'text-black-text'}
          ${disabled ? 'opacity-50' : ''}`}
      >
        {label}
      </label>
    </div>
  )
}

export default SelectV2