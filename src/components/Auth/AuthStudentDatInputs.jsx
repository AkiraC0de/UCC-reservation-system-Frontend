import Input from "../Shared/Input"
import SelectV2 from "../Shared/SelectV2"
import { PROGRAM_CHOICES, YEAR_LEVEL_CHOICES, SECTION_CHOICES } from "../../configs/Auth.config"
import useAuth from "../../hooks/useAuth"
import ErrorTxt from "../Shared/ErrorTxt"

const AuthStudentDatInputs = () => {
  const {auth, signUpError , handleAuth, setFileUpload, fileUpload} = useAuth()

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
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
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
          label="Section *"
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
      <div>
        <p className="text-xs text-gray-text mb-1">- Upload a picture of you Student ID</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFileUpload(e.target.files[0])}
          className="block w-full text-xs text-gray-600 file:mr-4 file:py-1 file:px-3
                    file:rounded-md file:border-0 file:text-xs file:font-medium
                    file:bg-lime-500 file:text-white hover:file:bg-lime-600
                    cursor-pointer border rounded-md"
        />
        <ErrorTxt>{signUpError?.fileUpload}</ErrorTxt>
      </div>
    </div>
  )
}
export default AuthStudentDatInputs