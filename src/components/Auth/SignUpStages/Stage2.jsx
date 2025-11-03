import useAuth from "../../../hooks/useAuth"
import AuthNameInputs from "../AuthNameInputs"
import AuthStudentDatInputs from "../AuthStudentDatInputs"
import SecondaryButton from "../../Shared/SecondaryButton"
import PrimaryButton from "../../Shared/PrimaryButton"

const Stage2 = () => {
  const {auth, resetSignUpError, handleSignUpError, signUpFor, setSignUpStage} = useAuth()

  const handleNextStage2 = () => {
    resetSignUpError()
    const requiredFields = ["firstName", "lastName", "section", "studentNo"]
    let hasError = false

    setTimeout(() => {
      requiredFields.forEach(field => {
        if (!auth[field]?.trim()) {
          handleSignUpError(field, `${field.replace(/([A-Z])/g, " $1")} is required`)
          hasError = true
        }
      })
    }, 100)

    if (!hasError) {
      setSignUpStage(3)
    }
  }

  return (
    <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">
        - {signUpFor} details
      </h2>
      <AuthNameInputs />
      {signUpFor == "student" ? <AuthStudentDatInputs /> : ""}

      <div className="flex justify-end gap-2">
        <SecondaryButton onClick={() => setSignUpStage(1)}>BACK</SecondaryButton>
        <PrimaryButton onClick={handleNextStage2} className="flex-1">
          NEXT
        </PrimaryButton>
      </div>
    </>
  )
}
export default Stage2