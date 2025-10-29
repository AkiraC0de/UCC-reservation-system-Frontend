import AuthBGoverlay from "../components/Auth/AuthBGoverlay"
import AuthForm from "../components/Auth/AuthForm"
import { ClipLoader } from "react-spinners"
import useAuth from "../hooks/useAuth"

const Auth = () => {
  const {isAutoLoginAtProgress} = useAuth()
  return (
    <div className="w-screen h-screen z-999 overflow-y-auto fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm bg-green-900/10">
        {isAutoLoginAtProgress ? <ClipLoader color="green" cssOverride={{position: "absolute" , bottom: "50%", right: "50%"}} size={40}/> : <AuthForm/>}
    </div>
  )
}

export default Auth