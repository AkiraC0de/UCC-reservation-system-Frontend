import LeftWingButtons from "./LeftWingButtons"

const LeftWing = () => {
  return (
    <div className="anim-fade-in-top w-full flex justify-center items-center relative">
        <div className="absolute top-3/4 -translate-y-[86%] -right-[7.9%] cube-2-light w-4/5 bg-green-300 h-[6%]"></div>
        <div className="absolute top-3/4 translate-y-[110%] right-[52.8%] cube-2-dark w-[51%] bg-green-500 h-[6%]"></div>
        <div className="cube-2 w-4/5 bg-green-400">
          <img className="w-full" src="/campus/north_congress/leftWing.png" alt="left_wing_blg" />
        </div>
        <LeftWingButtons/>
    </div>
  )
}
export default LeftWing