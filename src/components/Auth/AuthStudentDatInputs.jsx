import Input from "../Shared/Input"
import SelectV2 from "../Shared/SelectV2"
import { PROGRAM_CHOICES, YEAR_LEVEL_CHOICES } from "../../configs/Auth.config"

const AuthStudentDatInputs = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Input
          className="flex-3"
          label="Student No. *"
          placeholder="Ex: 00000000-A"
          type="Text"
        />
      </div>
      <div className="flex gap-2">
        <SelectV2 
          className="flex-3"
          label="Program *"
          options={PROGRAM_CHOICES}
        />
        <SelectV2 
          className="flex-1"
          label="Year *"
          options={YEAR_LEVEL_CHOICES}
        />
      </div>
    </div>
  )
}
export default AuthStudentDatInputs