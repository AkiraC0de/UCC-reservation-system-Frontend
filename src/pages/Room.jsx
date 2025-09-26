import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/Nav/RoomNav";
import useRoom from "../hooks/useRoom"
import RoomProvider from "../provider/roomProvider";

const Room = () => {
  return (
    <RoomProvider>
      <main className="grid grid-cols-[400px_1fr] px-10 gap-6 transition-all duration-500">
        <RoomNav/>
        <ModelPlatform/>
      </main>
    </RoomProvider>
  )
}
export default Room