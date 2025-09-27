import Input from "../Shared/Input"
import SelectV2 from "../Shared/SelectV2"
import { PROGRAM_CHOICES, YEAR_LEVEL_CHOICES } from "../../configs/Auth.config"

const AuthStudentDatInputs = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Input
          className="flex-4"
          label="Student No. *"
          placeholder="Ex: 00000000-A"
          type="Text"
        />
        <SelectV2 
          className="flex-3"
          label="Year *"
          placeholder=""
          options={YEAR_LEVEL_CHOICES}
        />
        <Input
          className="flex-3"
          label="Section *"
          placeholder="Ex: 1A"
          type="Text"
        />
      </div>
      <div className="flex gap-3">
        <SelectV2 
          className="flex-5"
          label="Program *"
          placeholder="Select your program"
          options={PROGRAM_CHOICES}
        />
        
      </div>
    </div>
  )
}
export default AuthStudentDatInputs