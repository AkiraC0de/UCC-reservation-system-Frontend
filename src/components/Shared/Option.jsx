const Option = ({children, onClick}) => {

  return (
    <button 
      onClick={onClick}
      className="group text-xs px-4 pl-6 font-meduim text-gray-text rounded-lg py-2  relative cursor-pointer w-full text-start">
        {children}
      <div className="w-4 aspect-square rounded-full absolute top-0.5 left-2 border-gray-300 border-b-3 border-l-3 border-l-transparent border-r-transparent border-r-3 rotate-35"></div>  
    </button>
  )
}
export default Option