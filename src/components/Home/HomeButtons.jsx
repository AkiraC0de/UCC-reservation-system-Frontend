import PrimaryButton from "../Shared/PrimaryButton"

const HomeButtons = () => {
  return (
    <div className="flex gap-10">
        <PrimaryButton>
            Reserve Classroom
        </PrimaryButton>
        <PrimaryButton>
            Reserve Projector
        </PrimaryButton>
    </div>
  )
}
export default HomeButtons