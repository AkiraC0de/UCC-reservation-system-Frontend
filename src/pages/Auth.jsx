import AuthBGoverlay from "../components/Auth/AuthBGoverlay"
import AuthForm from "../components/Auth/AuthForm"

const Auth = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto absolute top-0 left-0 bottom-0 right-0 z-200 backdrop-blur-sm bg-green-900/10">
        <AuthForm/>
    </div>
  )
}

export default Auth