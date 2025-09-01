import useRoom from "../../hooks/useRoom"
import LeftWing from "./LeftWing"
import NorthCongressModel from "./NorthCongressModel" 
import Stage1 from "./ModelStages/Stage1"
import Stage2 from "./ModelStages/Stage2"

const renderStage = () => {
  const {stage} = useRoom()

  switch (stage) {
    case 1:
      return <Stage1/>
    case 2:
      return <Stage2/>
    default:
      return <p>NOTHING</p>
  }
}


const ModelPlatform = () => {
  return (
    <div className=" flex justify-center flex-col items-center relative cube-wrap">
        {renderStage()}
    </div>
  )
}
export default ModelPlatform