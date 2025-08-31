const Option = ({children, onClick}) => {

  return (
    <button 
      onClick={onClick}
      className="text-sm px-2 py-1 cursor-pointer w-full text-start">
        {children}
    </button>
  )
}
export default Option