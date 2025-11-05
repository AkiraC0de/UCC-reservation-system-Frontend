import useAuth from "../../hooks/useAuth"
import PrimaryButton from "../Shared/PrimaryButton"

const AuthVerified = () => {
  const {handleAuthState} = useAuth()

  const handleClick = () => {
    handleAuthState("login")
  }

  return (
    <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
      <div className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full mb-3 animate-bounce-in">
        ✓
      </div>
      <h3 className="text-lg font-semibold text-green-600">Email Verified!</h3>
      <p className="text-sm text-gray-500 mb-4">
        Your email has been verified successfully. You will be notified once your account has been fully verified by the admin. <br/> (1-3 working days)
      </p>
      <PrimaryButton onClick={handleClick} className="w-full">
        CONTINUE
      </PrimaryButton>
    </div>
  )
}
export default AuthVerified