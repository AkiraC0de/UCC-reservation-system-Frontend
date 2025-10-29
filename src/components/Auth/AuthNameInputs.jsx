import useAuth from "../../hooks/useAuth"
import Input from "../Shared/Input"

const AuthNameInputs = () => {
  const {signUpError, auth, handleAuth} =  useAuth()

  const handleFirstname = (e) => {
    handleAuth("firstName", e.target.value)
  }

    const handleLastname = (e) => {
    handleAuth("lastName", e.target.value)
  }

    const handleMiddlename = (e) => {
    handleAuth("middleName", e.target.value)
  }
  
    const handleSuffix = (e) => {
    handleAuth("suffix", e.target.value)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Input
          className="flex-3"
          label="Fistname *"
          value={auth?.firstName}
          onChange={handleFirstname}
          error={signUpError.firstName}
          placeholder="Enter you firstname"
          type="Text"
        />
        <Input
          className="flex-1"
          label="M.I."
          value={auth.middleName}
          onChange={handleMiddlename}
          placeholder="Ex: A."
          type="Text"
        />
      </div>
      <div className="flex gap-3">
        <Input
          className="flex-3"
          label="Lastname *"
          value={auth.lastName}
          error={signUpError.lastName}
          onChange={handleLastname}
          placeholder="Enter you lastname"
          type="Text"
        />
        <Input
          className="flex-1"
          label="Suffix"
          error={signUpError.suffix}
          value={auth.suffix}
          onChange={handleSuffix}
          placeholder="Sr.,Jr.,III..."
          type="Text"
        />
      </div>
    </div>
  )
}
export default AuthNameInputs