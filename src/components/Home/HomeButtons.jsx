import PrimaryButton from "../Shared/PrimaryButton"
import SecondaryButton from "../Shared/SecondaryButton"
import {Link} from "react-router"

const HomeButtons = () => {
  return (
    <div className="flex gap-10 mt-[4%]">
        <PrimaryButton>
          <Link to="/room">
            Reserve Classroom
           </Link>
        </PrimaryButton>      
        <SecondaryButton>
          <Link to="/projector">
            Reserve Projector
           </Link>
        </SecondaryButton>
    </div>
  )
}
export default HomeButtons