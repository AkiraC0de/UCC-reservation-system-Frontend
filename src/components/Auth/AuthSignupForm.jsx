import SecondaryButton from "../Shared/SecondaryButton"
import { useState } from "react"
import PrimaryButton from "../Shared/PrimaryButton"
import AuthNameInputs from "./AuthNameInputs"
import AuthStudentDatInputs from "./AuthStudentDatInputs"

const AuthSignupForm = () => {
  const [stage, setStage] = useState(1)

  const handleStage = (value) => {
    setStage(value)
  }

  return (
    <div className="flex flex-col gap-5">
      {renderStage(stage, handleStage)}
    </div>
  )
}

const renderStage = (stage, handleClick) => {
  switch(stage){
    case 1: 
    return <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">- student details</h2>
      <AuthNameInputs/>
      <AuthStudentDatInputs/>
      <div className="flex justify-end">
        <PrimaryButton 
          onClick={() => handleClick(2)}
          className="flex-1">
          NEXT
        </PrimaryButton>
      </div>
    </>
    case 2:
    return <>
      <h2 className="font-medium text-gray-500 text-sm uppercase tracking-wide">- student details</h2>
      <div className="flex justify-end gap-2">
        <SecondaryButton 
          onClick={() => handleClick(1)}
          >
          BACK
        </SecondaryButton>
        <PrimaryButton 
          onClick={() => handleClick(2)}
          className="flex-1">
          NEXT
        </PrimaryButton>
      </div>
    </>
    default:
    return <p className="text-center">Error!</p>
  }
}
export default AuthSignupForm