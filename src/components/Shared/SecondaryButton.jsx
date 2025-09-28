const SecondaryButton = ({children, className = "", onClick}) => {
  const buttonClass = `${className} hover:scale-105 shadow-md transition-all duration-300 cursor-pointer border-2 border-[#9fcc56] text-green-gradient text-sm font-semibold py-2.5 px-4 rounded-lg`
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
export default SecondaryButton