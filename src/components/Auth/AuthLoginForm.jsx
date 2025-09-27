import AuthLoginInputs from "./AuthLoginInputs"
import RememberMe from "./RememberMe"
import ForgotPassword from "./ForgotPassword"
import SubmitBtn from "./SubmitBtn"
import PrimaryButton from "../Shared/PrimaryButton"

const AuthLoginForm = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <AuthLoginInputs/>
      <div className="flex justify-between pb-2">
        <RememberMe/>
        <ForgotPassword/>
      </div>
      <PrimaryButton>
        SUBMIT
      </PrimaryButton>
    </div>
  )
}
export default AuthLoginForm