import RoomHeaderStages from "./RoomHeaderStages"
import RoomNavLocateSection from "./RoomNavLocateSection"
import RoomNavHeader from "./RoomNavHeader"
import RoomNavSchedSection from "./RoomNavSchedSection"

const RoomNav = () => {
  return (
    <div className="z-100">
      <div className=" bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 min-h-120">
        <RoomNavHeader/>
        <RoomHeaderStages/>
        <div className="flex flex-col gap-4">
          <RoomNavLocateSection/>
          <RoomNavSchedSection/>
        </div>
      </div>
    </div>
  )
}
export default RoomNav