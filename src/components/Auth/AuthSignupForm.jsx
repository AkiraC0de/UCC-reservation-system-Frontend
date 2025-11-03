import useAuth from "../../hooks/useAuth"
import Stage1 from "./SignUpStages/Stage1"
import Stage2 from "./SignUpStages/Stage2"
import Stage3 from "./SignUpStages/Stage3"
import Stage4 from "./SignUpStages/Stage4"

const AuthSignupForm = () => {
  const {signUpStage} = useAuth()

  const renderStage = () => {
    switch (signUpStage) {
      case 1:
        return <Stage1/>
      case 2:
        return <Stage2/>
      case 3:
        return <Stage3/>
      case 4:
        return <Stage4/>
      default:
        return <p className="text-center">Error!</p>
    }
  }

  return <div className="flex flex-col gap-5">{renderStage()}</div>
}

export default AuthSignupForm