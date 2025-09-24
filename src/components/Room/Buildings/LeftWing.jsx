import LeftWingButtons from "./LeftWingButtons"
import BuildingSideOverlay from "./BuildingSideOverlay"

const LeftWing = () => {
  return (
    <div className="anim-fade-in-top w-full flex justify-center items-center relative">
        <BuildingSideOverlay/>
        <LeftWingModel/>
        <LeftWingButtons/>
    </div>
  )
}

const LeftWingModel = () => {
  return(
    <div className="cube-2 w-4/5 ">
      <img className="w-full" src="/campus/north_congress/leftWing.webp" alt="left_wing_blg" />
    </div>
  )
}
export default LeftWing