import Input from "../Shared/Input"
import AuthFormHeader from "./AuthFormHeader"
import AuthLoginInputs from "./AuthLoginInputs"
import ForgotPassword from "./ForgotPassword"
import RememberMe from "./RememberMe"
import SubmitBtn from "./SubmitBtn"
import SwitchAuth from "./SwitchAuth"

const AuthForm = () => {
  return (
    <form className="flex gap-2 flex-col justify-items w-90 rounded-lg p-8 bg-white absolute top-10 translate right-1/2 translate-x-1/2">
      <AuthFormHeader/>
      <AuthLoginInputs/>
      <div className="flex justify-between pb-2">
        <RememberMe/>
        <ForgotPassword/>
      </div>
      <SubmitBtn/>
      <hr className="border border-gray-300 my-3"/>
      <SwitchAuth/>
    </form>
  )
}
export default AuthForm