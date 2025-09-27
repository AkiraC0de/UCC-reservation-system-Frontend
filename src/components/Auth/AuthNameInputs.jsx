import Input from "../Shared/Input"

const AuthNameInputs = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Input
          className="flex-3"
          label="Fistname *"
          placeholder="Enter you firstname"
          type="Text"
        />
        <Input
          className="flex-1"
          label="M.I."
          placeholder="Ex: A."
          type="Text"
        />
      </div>
      <div className="flex gap-3">
        <Input
          className="flex-3"
          label="Lastname *"
          placeholder="Enter you lastname"
          type="Text"
        />
        <Input
          className="flex-1"
          label="Suffix"
          placeholder="Sr.,Jr.,III..."
          type="Text"
        />
      </div>
    </div>
  )
}
export default AuthNameInputs