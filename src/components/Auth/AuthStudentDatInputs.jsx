import Input from "../Shared/Input"
import SelectV2 from "../Shared/SelectV2"
import { PROGRAM_CHOICES, YEAR_LEVEL_CHOICES, SECTION_CHOICES } from "../../configs/Auth.config"
import useAuth from "../../hooks/useAuth"

const AuthStudentDatInputs = () => {
  const {auth, signUpError , handleAuth} = useAuth()

  const handleStudentno = (e) => {
    handleAuth("studentNo", e.target.value)
  }

  const handleYear = (e) => {
    handleAuth("yearLevel", e.target.value)
  }

  const handleSection = (e) => {
    handleAuth("section", e.target.value)
  }

  const handleProgram = (e) => {
    handleAuth("program", e.target.value)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <Input
          className="flex-4"
          label="Student No. *"
          error={signUpError.studentNo}
          value={auth.studentNo}
          onChange={handleStudentno}
          placeholder="Ex: 00000000-A"
          type="Text"
        />
        <SelectV2 
          className="flex-3"
          label="Year *"
          placeholder=""
          options={YEAR_LEVEL_CHOICES}
          value={auth.yearLevel || ""}
          onChange={handleYear}
        />
        <SelectV2 
          className="flex-3"
          label="Year *"
          placeholder=""
          options={SECTION_CHOICES}
          value={auth.section || ""}
          onChange={handleSection}
        />
      </div>
      <div className="flex gap-3">
        <SelectV2 
          className="flex-5"
          label="Program *"
          placeholder="Select your program"
          options={PROGRAM_CHOICES}
          value={auth.program || " "}
          onChange={handleProgram}
        />
        
      </div>
    </div>
  )
}
export default AuthStudentDatInputs