import RoomHeaderStages from "./RoomHeaderStages"
import RoomNavLocateSection from "./RoomNavLocateSection"
import RoomNavHeader from "./RoomNavHeader"

const RoomNav = () => {
  return (
    <div className="z-100">
      <div className=" bg-white p-4 rounded-2xl shadow-md flex flex-col gap-4 min-h-120">
        <RoomNavHeader/>
        <RoomHeaderStages/>
        <RoomNavLocateSection/>
      </div>
    </div>
  )
}
export default RoomNav