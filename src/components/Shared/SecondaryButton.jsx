const SecondaryButton = ({children, className = ""}) => {
  const buttonClass = `${className} hover:scale-105 shadow-md transition-all duration-300 cursor-pointer border-2 border-green-500 text-green-500 text-sm font-semibold py-2.5 px-4 rounded-xl`
  return (
    <button className={buttonClass}>
        {children}
    </button>
  )
}
export default SecondaryButton