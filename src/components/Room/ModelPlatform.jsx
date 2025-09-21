import useRoom from "../../hooks/useRoom"
import Stage1 from "./ModelStages/Stage1"
import Stage2 from "./ModelStages/Stage2"

const ModelPlatform = () => {
  return (
    <div className=" flex justify-start flex-col items-center relative cube-wrap pt-14">
        {renderStage()}
    </div>
  )
}

const renderStage = () => {
  const {stage} = useRoom()

  switch (stage) {
    case 1:
      return <Stage1/>
    case 2:
      return <Stage2/>
    default:
      return <p>Error! Please Reset</p>
  }
}


export default ModelPlatform