import Input from "../Shared/Input"

const AuthLoginInputs = () => {
  return (
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
  )
}
export default AuthLoginInputs