import AuthLoginInputs from "./AuthLoginInputs"
import RememberMe from "./RememberMe"
import ForgotPassword from "./ForgotPassword"
import PrimaryButton from "../Shared/PrimaryButton"
import useAuth from "../../hooks/useAuth"
import { SyncLoader } from "react-spinners"
import { useState } from "react"

const AuthLoginForm = () => {
  const {handleLogin, isLoading, auth, handleError, resetError} = useAuth()

  const handleLoginClick = () => {
    resetError()
    let hasError = false

    if(!auth.email){
      handleError("email", "Email is required")
      hasError = true
    }

    if(!auth.password){
      handleError("password", "Password is required")
      hasError = true
    }
    
    if(hasError) return
    handleLogin()
  }


  return (
    <div className="flex flex-col gap-2 w-full">
      <AuthLoginInputs/>
      <div className="flex justify-between pb-2">
        <RememberMe/>
        <ForgotPassword/>
      </div>
      <PrimaryButton onClick={handleLoginClick}>
        {isLoading ? <SyncLoader color="green" size={6}/> : "LOGIN"}     
      </PrimaryButton>
      
    </div>
  )
}
export default AuthLoginForm