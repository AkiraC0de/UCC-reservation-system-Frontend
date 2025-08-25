const PrimaryButton = ({children}) => {
  return (
    <button className="hover:scale-105 shadow-md transition-all duration-300 cursor-pointer bg-green-gradient text-white text-sm font-semibold py-2.5 px-4 rounded-xl">
        {children}
    </button>
  )
}
export default PrimaryButton