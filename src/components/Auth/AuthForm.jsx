import useAuth from "../../hooks/useAuth"
import AuthFormHeader from "./AuthFormHeader"
import AuthSignupForm from "./AuthSignupForm"
import AuthLoginForm from "./AuthLoginForm"

import SwitchAuth from "./SwitchAuth"

const AuthForm = () => {
  const {authState} = useAuth()

  return (
    <form className="flex gap-2 flex-col justify-items w-90 rounded-lg p-8 bg-white absolute top-10 translate right-1/2 translate-x-1/2">
      <AuthFormHeader/>
      {authState == "login" ? <AuthLoginForm/> : <AuthSignupForm/> }
      <hr className="border border-gray-300 my-3"/>
      <SwitchAuth/>
    </form>
  )
}
export default AuthForm