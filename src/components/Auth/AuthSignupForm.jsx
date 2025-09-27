
import PrimaryButton from "../Shared/PrimaryButton"
import AuthNameInputs from "./AuthNameInputs"
import AuthStudentDatInputs from "./AuthStudentDatInputs"

const AuthSignupForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">- student details</h2>
      <AuthNameInputs/>
      <AuthStudentDatInputs/>
      <div className="flex justify-end">
        <PrimaryButton className="flex-1">
          NEXT
        </PrimaryButton>
      </div>
    </div>
  )
}
export default AuthSignupForm