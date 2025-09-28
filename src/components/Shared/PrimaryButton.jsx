const PrimaryButton = ({children, className = "", onClick = () => {}}) => {
  const buttonClass = `${className} tracking-wide hover:scale-105 shadow-md transition-all duration-300 cursor-pointer bg-green-gradient text-white text-sm font-semibold py-2.5 px-4 rounded-lg`
  return (
    <button 
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={buttonClass}>
        {children}
    </button>
  )
}
export default PrimaryButton