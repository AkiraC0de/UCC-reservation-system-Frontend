import LeftWingButtons from "./LeftWingButtons"

const LeftWing = () => {
  return (
    <div className="anim-fade-in-top w-full flex justify-center items-center relative">
        <img className="cube w-7/10" src="/campus/north_congress/leftWing.png" alt="left_wing_blg" />
        <LeftWingButtons/>
    </div>
  )
}
export default LeftWing