import AuthBGoverlay from "../components/Auth/AuthBGoverlay"
import AuthForm from "../components/Auth/AuthForm"
import { ClipLoader } from "react-spinners"
import useAuth from "../hooks/useAuth"
import clsx from "clsx"

const Auth = () => {
  const {isAutoLoginAtProgress} = useAuth()

  const overlayClasses = clsx(
    isAutoLoginAtProgress ? "bg-white/95" : "bg-green-900/10",
    "w-screen h-screen z-999 overflow-y-auto fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm"
  )

  return (
    <div className={overlayClasses}>
        {isAutoLoginAtProgress ? <ClipLoader color="green" cssOverride={{position: "absolute" , bottom: "50%", right: "50%"}} size={40}/> : <AuthForm/>}
    </div>
  )
}

export default Auth