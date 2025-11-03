import { useState, useEffect } from "react"
import useAuth from "../../../hooks/useAuth"
import PrimaryButton from "../../Shared/PrimaryButton"
import AuthVerified from "../AuthVerified"
import ErrorTxt from "../../Shared/ErrorTxt"

const Stage4 = () => {
  const { auth, signUpStage } = useAuth()

  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(30)
  const [error, setError] = useState("") 
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    if (signUpStage !== 4) return
    if (timer === 0) return
    const countdown = setInterval(() => setTimer(prev => prev - 1), 1000)
    return () => clearInterval(countdown)
  }, [timer, signUpStage])

  const handleCodeInput = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    if (!value && e.target.value.length === 0) return

    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    if (value && index < 5) e.target.parentNode.children[index + 1]?.focus()
  }

  const handleBackspace = (e, index) => {
    const newCode = [...verificationCode]
    newCode[index] = ""
    setVerificationCode(newCode)
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
      setError("Please enter the 6-digit verification code.")
      return
    }

    setIsVerifying(true)
    setError("")

    try {
      const response = await fetch("http://localhost:8080/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: auth.email,
          code: enteredCode,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message)
      }

      setIsVerified(true)

    } catch (error) {
      setError(error.message || "Invalid verification code. Please try again.")
      console.error("Verification error:", error.message)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide mb-3">
        - Email Verification
      </h2>

      {isVerified ? (
        <AuthVerified/>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a 6-digit verification code to <strong>{auth.email}</strong>. 
            Please enter the code below to verify your account.
          </p>

          <div className="flex justify-center gap-2 mb-2">
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

          <div className="w-full text-center">
            <ErrorTxt>{error}</ErrorTxt>
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
}
export default Stage4