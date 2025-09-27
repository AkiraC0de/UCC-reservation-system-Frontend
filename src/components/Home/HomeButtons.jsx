import PrimaryButton from "../Shared/PrimaryButton"
import SecondaryButton from "../Shared/SecondaryButton"

const HomeButtons = () => {
  return (
    <div className="flex gap-10 mt-[4%]">
        <PrimaryButton>
            Reserve Classroom
        </PrimaryButton>
        <SecondaryButton>
            Reserve Projector
        </SecondaryButton>
    </div>
  )
}
export default HomeButtons