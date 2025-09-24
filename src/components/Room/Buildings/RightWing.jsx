import BuildingSideOverlay from "./BuildingSideOverlay"
import RightWingButtons from "./RightWingButtons"

const RightWing = () => {
  return (
    <div className="anim-fade-in-top w-full flex justify-center items-center relative">
        <BuildingSideOverlay/>
        <RightWingModel/>
        <RightWingButtons/>
    </div>
  )
}

const RightWingModel = () => {
  return(
    <div className="cube-2 w-4/5">
        <img className="w-full" src="/campus/north_congress/rightWing.webp" alt="right_wing_blg" />
    </div>
  )
}
export default RightWing