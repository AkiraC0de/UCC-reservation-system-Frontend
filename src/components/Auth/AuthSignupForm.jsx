import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import PrimaryButton from "../Shared/PrimaryButton"
import SecondaryButton from "../Shared/SecondaryButton"
import Input from "../Shared/Input"
import AuthNameInputs from "./AuthNameInputs"
import AuthStudentDatInputs from "./AuthStudentDatInputs"

const AuthSignupForm = () => {
  const [stage, setStage] = useState(1)
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(30)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userId, setUserId] = useState(null)

  const {
    auth,
    signUpError,
    setSignUpError,
    resetSignUpError,
    handleSignUpError,
    handleAuth,
    setSignUpFor,
    signUpFor,
    handleAuthState
  } = useAuth()

  /** COUNTDOWN TIMER FOR RESEND */
  useEffect(() => {
    if (stage !== 4) return
    if (timer === 0) return
    const countdown = setInterval(() => setTimer(prev => prev - 1), 1000)
    return () => clearInterval(countdown)
  }, [timer, stage])

  /** HANDLERS */
  const handleStage = (value) => setStage(value)

  // --- STAGE 1: SELECT ROLE ---
  const renderRoleSelection = () => (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide mb-3">
        - Select your role
      </h2>
      <div className="flex gap-4">
        {["student", "faculty"].map(role => (
          <PrimaryButton
            key={role}
            onClick={() => {
              setSignUpFor(role)
              handleStage(2)
            }}
            className="flex-1"
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </PrimaryButton>
        ))}
      </div>
    </>
  )

  // --- STAGE 2: STUDENT/FACULTY DETAILS ---
  const handleNextStage2 = () => {
    resetSignUpError()
    const requiredFields = ["firstName", "lastName", "section", "studentNo"]
    let hasError = false

    requiredFields.forEach(field => {
      if (!auth[field]?.trim()) {
        handleSignUpError(field, `${field.replace(/([A-Z])/g, " $1")} is required`)
        hasError = true
      }
    })

    if (hasError) return
    handleStage(3)
  }

  const renderStudentDetails = () => (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">
        - {signUpFor} details
      </h2>
      <AuthNameInputs />
      <AuthStudentDatInputs />

      <div className="flex justify-end gap-2">
        <SecondaryButton onClick={() => handleStage(1)}>BACK</SecondaryButton>
        <PrimaryButton onClick={handleNextStage2} className="flex-1">
          NEXT
        </PrimaryButton>
      </div>
    </>
  )

  // --- STAGE 3: ACCOUNT DETAILS ---
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleEmail = (e) => {
    const value = e.target.value
    handleAuth("email", value)
    
    if (value && !validateEmail(value)) {
      handleSignUpError("email", "Invalid email format")
    } else {
      handleSignUpError("email", "")
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

  const handleNextStage3 = async () => {
    // Validate required fields
    if (!auth.email || !auth.password || !auth.confirmPassword) {
      // Use handleSignUpError instead of setSignUpError
      if (!auth.email) handleSignUpError("email", "Email is required")
      if (!auth.password) handleSignUpError("password", "Password is required")
      if (!auth.confirmPassword) handleSignUpError("confirmPassword", "Confirm your password")
      return
    }

    // Check for existing errors
    if (signUpError.email || signUpError.password || signUpError.confirmPassword) return

    setIsSubmitting(true)

    try {
      // Prepare signup data - ensure all required fields are present
      const signupData = {
        firstName: auth.firstName?.trim(),
        lastName: auth.lastName?.trim(),
        program: auth.program?.trim() || auth.course?.trim() || "N/A",
        yearLevel: auth.yearLevel?.trim() || auth.year?.trim() || "N/A",
        section: auth.section?.trim(),
        email: auth.email?.trim(),
        password: auth.password,
        role: signUpFor,
      }

      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle specific error cases using handleSignUpError
        if (response.status === 409) {
          handleSignUpError("email", "Email is already registered")
        } else if (response.status === 400) {
          handleSignUpError("email", data.message || "Please check your input")
        } else {
          alert(data.message || "Signup failed. Please try again.")
        }
        return
      }

      // Success - store user ID and move to verification
      setUserId(data.data.id)
      handleStage(4)
      
    } catch (error) {
      console.error("Signup error:", error)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderAccountDetails = () => (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">
        - Account details
      </h2>
      <div className="flex flex-col gap-5">
        <Input
          label="Email *"
          className="bg-white"
          value={auth.email}
          error={signUpError.email}
          onChange={handleEmail}
          placeholder="Enter your email"
          type="email"
        />
        <Input
          label="Password *"
          className="bg-white"
          value={auth.password}
          error={signUpError.password}
          onChange={handlePassword}
          placeholder="Enter your preferred password"
          type="password"
        />
        <Input
          label="Confirm Password *"
          className="bg-white"
          value={auth.confirmPassword}
          error={signUpError.confirmPassword}
          onChange={handleConfirmPassword}
          placeholder="Confirm your password"
          type="password"
        />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <SecondaryButton onClick={() => handleStage(2)} disabled={isSubmitting}>
          BACK
        </SecondaryButton>
        <PrimaryButton 
          onClick={handleNextStage3} 
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? "CREATING ACCOUNT..." : "NEXT"}
        </PrimaryButton>
      </div>
    </>
  )

  // --- STAGE 4: EMAIL VERIFICATION ---
  const handleCodeInput = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    if (!value && e.target.value.length === 0) return

    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    if (value && index < 5) e.target.parentNode.children[index + 1]?.focus()
  }

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      e.target.parentNode.children[index - 1]?.focus()
    }
  }

  const handleResendCode = async () => {
    if (timer > 0) return
    
    try {
      const response = await fetch("http://localhost:8080/api/auth/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: auth.email,
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setTimer(30)
        alert("Verification code resent successfully!")
      } else {
        alert(data.message || "Failed to resend code")
      }
    } catch (error) {
      console.error("Resend error:", error)
      alert("Network error. Please try again.")
    }
  }

  const handleVerifyCode = async () => {
    const enteredCode = verificationCode.join("")
    if (enteredCode.length !== 6) {
      alert("Please enter the 6-digit verification code.")
      return
    }

    setIsVerifying(true)

    try {
      const response = await fetch("http://localhost:8080/api/auth/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: auth.email,
          verificationCode: enteredCode,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsVerified(true)
      } else {
        alert(data.message || "Invalid verification code. Please try again.")
      }
    } catch (error) {
      console.error("Verification error:", error)
      alert("Network error. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const renderVerification = () => (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide mb-3">
        - Email Verification
      </h2>

      {isVerified ? (
        <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
          <div className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full mb-3 animate-bounce-in">
            ✓
          </div>
          <h3 className="text-lg font-semibold text-green-600">Email Verified!</h3>
          <p className="text-sm text-gray-500 mb-4">
            Your account has been verified successfully.
          </p>
          <PrimaryButton onClick={() => handleAuthState()} className="w-full">
            CONTINUE
          </PrimaryButton>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a 6-digit verification code to <strong>{auth.email}</strong>. 
            Please enter the code below to verify your account.
          </p>

          <div className="flex justify-center gap-2 mb-5">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
                value={verificationCode[index]}
                onChange={(e) => handleCodeInput(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={handleResendCode}
              disabled={timer > 0}
              className={`text-xs ${timer > 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-500 hover:underline"}`}
            >
              {timer > 0 ? `Resend in ${timer}s` : "Resend Code"}
            </button>
            <span className="text-sm text-gray-400">Didn't receive it? Check spam.</span>
          </div>

          <div className="flex justify-end">
            <PrimaryButton
              onClick={handleVerifyCode}
              disabled={isVerifying}
              className="flex-1"
            >
              {isVerifying ? "VERIFYING..." : "VERIFY"}
            </PrimaryButton>
          </div>
        </>
      )}
    </>
  )

  /** RENDER CURRENT STAGE */
  const renderStage = () => {
    switch (stage) {
      case 1:
        return renderRoleSelection()
      case 2:
        return renderStudentDetails()
      case 3:
        return renderAccountDetails()
      case 4:
        return renderVerification()
      default:
        return <p className="text-center">Error!</p>
    }
  }

  return <div className="flex flex-col gap-5">{renderStage()}</div>
}

export default AuthSignupForm