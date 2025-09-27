import useAuth from "../../hooks/useAuth"
import ErrorTxt from "../Shared/ErrorTxt"
import Input from "../Shared/Input"

const AuthLoginInputs = () => {
  const {auth, handleAuth, error} = useAuth()

  const handleEmail = (e) => {
    handleAuth("email", e.target.value)
  }

  const handlePassword = (e) => {
    handleAuth("password", e.target.value)
  }


  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <Input
          label="Email *"
          className="bg-white"
          value={auth.email}
          error={error.email}
          onChange={handleEmail}
          placeholder="Enter your email"
          type="email"
        />
        <ErrorTxt>{error.email || ""}</ErrorTxt>
      </div>
      <div>
        <Input
          label="Password *"
          value={auth.password}
          error={error.password}
          onChange={handlePassword}
          placeholder="Enter your password"
          type="password"
        />
        <ErrorTxt>{error.password || ""}</ErrorTxt>
      </div>
    </div>
  )
}
export default AuthLoginInputs