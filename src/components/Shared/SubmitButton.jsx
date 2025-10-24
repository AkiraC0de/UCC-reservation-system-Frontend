import clsx from "clsx"

const SubmitButton = ({children, disabled, className, onClick = () => {}}) => {
  const buttonClasses = clsx(` relative shadow-md border-2 border-[#9fcc56] 
    text-sm font-semibold py-3 px-4 rounded-lg mt-2
    transition-all duration-300 ease-in-out w-full
    cursor-pointer
  `,{
    "line-through text-gray-400 ": disabled,
    "text-green-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-lime-500 hover:text-white hover:scale-103 hover:shadow-lg": !disabled
  }, className)
  const handleClick = () => {
    if(disabled) return
    onClick()
  }
  return (
    <button
      className={buttonClasses}
      onClick={handleClick}  
    >
      {children}
    </button>
  )
}
export default SubmitButton