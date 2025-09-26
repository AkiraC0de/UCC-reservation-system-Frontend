import Input from "../Shared/Input"
import AuthFormHeader from "./AuthFormHeader"
import AuthLoginInputs from "./AuthLoginInputs"
import SubmitBtn from "./SubmitBtn"

const AuthForm = () => {
  return (
    <form className="flex gap-8 flex-col justify-items w-90 rounded-lg p-8 bg-white absolute top-10 translate right-1/2 translate-x-1/2">
      <AuthFormHeader/>
      <AuthLoginInputs/>
      <SubmitBtn/>
    </form>
  )
}
export default AuthForm