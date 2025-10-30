const CancelConfirmationButton = ({onClick = () => {}}) => {
  return (
    <button 
      className="flex-1 cursor-pointer hover:scale-103 transition-all duration-300 flex items-center gap-2 text-sm text-gray-500 font-semibold py-3 px-4 rounded-lg center relative shadow-md border-2 border-gray-300 mt-2"
      onClick={onClick}
    >
      <p>Cancel</p>
    </button>
  )
}
export default CancelConfirmationButton