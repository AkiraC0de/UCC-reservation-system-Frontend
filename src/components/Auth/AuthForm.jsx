import Input from "../Shared/Input"
import AuthFormHeader from "./AuthFormHeader"

const AuthForm = () => {
  return (
    <div className="flex gap-8 flex-col justify-items w-90 rounded-lg p-8 bg-white absolute top-10 translate right-1/2 translate-x-1/2">
      <AuthFormHeader/>
      <div className="flex flex-col gap-6">
        <Input
          label="Email *"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          label="Password *"
          placeholder="Enter your password"
          type="password"
        />
      </div>
    
    </div>
  )
}
export default AuthForm