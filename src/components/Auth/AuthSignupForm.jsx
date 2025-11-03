import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import PrimaryButton from "../Shared/PrimaryButton"
import Stage1 from "./SignUpStages/Stage1"
import Stage2 from "./SignUpStages/Stage2"
import Stage3 from "./SignUpStages/Stage3"

const AuthSignupForm = () => {
  const {signUpStage} = useAuth()

  const [stage, setStage] = useState(1)
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(30)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const {
    auth,
    handleAuthState
  } = useAuth()

  /** COUNTDOWN TIMER FOR RESEND */
  useEffect(() => {
    if (stage !== 4) return
    if (timer === 0) return
    const countdown = setInterval(() => setTimer(prev => prev - 1), 1000)
    return () => clearInterval(countdown)
  }, [timer, stage])

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
    switch (signUpStage) {
      case 1:
        return <Stage1/>
      case 2:
        return <Stage2/>
      case 3:
        return <Stage3/>
      case 4:
        return renderVerification()
      default:
        return <p className="text-center">Error!</p>
    }
  }

  return <div className="flex flex-col gap-5">{renderStage()}</div>
}

export default AuthSignupForm