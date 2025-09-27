const ForgotPassword = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <button 
      onClick={handleClick}
      className="text-xs text-blue-500 underline cursor-pointer"
    >
      Forgot password?
    </button>
  )
}
export default ForgotPassword