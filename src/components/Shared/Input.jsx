const Input = ({label, type, placeholder}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="peer border p-2 py-3 text-sm rounded-sm w-full focus:outline-green-400" 
        type={type} 
      />
      <h3 className="peer-focus:text-green-400 text-black-text absolute -top-2 left-2 text-sm font-medium bg-white px-2">{label}</h3>
    </div>
  )
}
export default Input