const PrimaryButton = ({children, className = ""}) => {
  const buttonClass = `${className} tracking-wide hover:scale-105 shadow-md transition-all duration-300 cursor-pointer bg-green-gradient text-white text-sm font-semibold py-2.5 px-4 rounded-xl`
  return (
    <button className={buttonClass}>
        {children}
    </button>
  )
}
export default PrimaryButton