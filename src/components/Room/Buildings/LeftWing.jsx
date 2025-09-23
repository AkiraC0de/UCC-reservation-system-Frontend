import LeftWingButtons from "./LeftWingButtons"

const LeftWing = () => {
  return (
    <div className="anim-fade-in-top w-full flex justify-center items-center relative">
        <LeftWingSidesOverlay/>
        <LeftWingModel/>
        <LeftWingButtons/>
    </div>
  )
}

const LeftWingSidesOverlay = () => {
  return (
    <>
      <div className="absolute top-3/4 -translate-y-[139%] -right-[3.4%] cube-2-light w-[77.4%] bg-gray-200 h-[6%]"></div>
      <div className="absolute top-3/4 translate-y-[98%] right-[56.5%] cube-2-dark w-[41.5%] bg-gray-300 h-[6%]"></div>
    </>
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