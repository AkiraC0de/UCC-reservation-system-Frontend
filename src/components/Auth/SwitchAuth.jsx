import useAuth from "../../hooks/useAuth"

const SwitchAuth = () => {
  const {authState, handleAuthState} = useAuth()

  const question = authState == "login" ? "Don't" : "Already"
  const state = authState == "login" ? "Sign up" :  "Log in" 

  const handleClick = (e) => {
    e.preventDefault()
    handleAuthState()
  }

  return ( 
    <div className="flex justify-center gap-1 text-xs">
      <span>{question} have an account?</span>
      <button 
        onClick={handleClick}
        className="text-blue-500 underline cursor-pointer">
          {state}
      </button>
    </div>
  )
}
export default SwitchAuth