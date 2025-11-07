import { useState } from "react"
import { evalidateEmail } from "../../../Utils/utils"
import useAuth from "../../../hooks/useAuth"
import Input from "../../Shared/Input"
import PrimaryButton from "../../Shared/PrimaryButton"
import SecondaryButton from "../../Shared/SecondaryButton"
import ErrorTxt from "../../Shared/ErrorTxt"
import { SyncLoader } from "react-spinners"

const Stage3 = () => {
  const {
    auth, 
    handleAuth, 
    signUpFor, 
    setSignUpStage, 
    signUpError, 
    handleSignUpError, 
    resetSignUpError,
    setUserId,
    fileUpload
  } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEmail = (e) => {
    const value = e.target.value
    handleAuth("email", value)
    
    if (value && !evalidateEmail(value)) {
      handleSignUpError("email", "Invalid email format")
    } else {
      handleSignUpError("email", null)
    }
  }

  const handlePassword = (e) => {
    const value = e.target.value
    handleAuth("password", value)
    
    // Match backend validation: 8+ chars, uppercase, lowercase, number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    const errorMsg = passwordRegex.test(value) 
      ? "" 
      : "Password must be at least 8 characters with uppercase, lowercase, and number"
    
    handleSignUpError("password", errorMsg)
  }

  const handleConfirmPassword = (e) => {
    const value = e.target.value
    handleAuth("confirmPassword", value)
    
    const errorMsg = value !== auth.password ? "Passwords do not match" : ""
    handleSignUpError("confirmPassword", errorMsg)
  }

  const handleNextStage3 = () => {
    resetSignUpError()
    setTimeout(async () => {
      // Validate required fields
      if (!auth.email || !auth.password || !auth.confirmPassword) {
        // Use handleSignUpError instead of setSignUpError
        if (!auth.email) handleSignUpError("email", "Email is required")
        if (!auth.password) handleSignUpError("password", "Password is required")
        if (!auth.confirmPassword) handleSignUpError("confirmPassword", "Confirm your password")
        return
      }

      if (signUpError.email || signUpError.password || signUpError.confirmPassword) return

      setIsSubmitting(true)

      try {
        // Prepare signup data - ensure all required fields are present
        const formData = new FormData()

        formData.append("firstName", auth.firstName?.trim());
        formData.append("lastName", auth.lastName?.trim());
        formData.append("program", auth.program?.trim());
        formData.append("yearLevel", auth.yearLevel);
        formData.append("section", auth.section?.trim());
        formData.append("email", auth.email?.trim());
        formData.append("password", auth.password);
        formData.append("role", signUpFor);

        if (fileUpload) {
          formData.append("studentId", fileUpload); 
        }

        const response = await fetch("http://localhost:8080/api/auth/signup", {
          method: "POST",
          body: formData,
        })

        const data = await response.json()

        if(!data.success){
            throw new Error(data.message)
        }

        // Success - store user ID and move to verification
        setUserId(data.data?.id)
        setSignUpStage(4)

      } catch (error) {
        console.error("Signup error:", error)
      } finally {
        setIsSubmitting(false)
      }
    }, 100)
  }

  return (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">
        - Account details
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <Input
            label="Email *"
            className="bg-white"
            value={auth.email}
            error={signUpError.email}
            onChange={handleEmail}
            placeholder="Enter your email"
            type="email"
          />
         <ErrorTxt>{signUpError.email}</ErrorTxt>
        </div>
        <div className="flex flex-col">
          <Input
            label="Password *"
            className="bg-white"
            value={auth.password}
            error={signUpError.password}
            onChange={handlePassword}
            placeholder="Enter your preferred password"
            type="password"
          />
          <ErrorTxt>{signUpError.password}</ErrorTxt>
        </div>
        <div className="flex flex-col">
          <Input
            label="Confirm Password *"
            className="bg-white"
            value={auth.confirmPassword}
            error={signUpError.confirmPassword}
            onChange={handleConfirmPassword}
            placeholder="Confirm your password"
            confirmPassword
            type="password"
          />
          <ErrorTxt>{signUpError.confirmPassword}</ErrorTxt>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <SecondaryButton onClick={() => setSignUpStage(2)} disabled={isSubmitting}>
          BACK
        </SecondaryButton>
        <PrimaryButton 
          onClick={handleNextStage3} 
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? <SyncLoader color="green" size={6}/> : "NEXT"}  
        </PrimaryButton>
      </div>
    </>
  )
}
export default Stage3