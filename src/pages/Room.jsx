import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/RoomNav"
import useRoom from "../hooks/useRoom"
import RoomProvider from "../provider/roomProvider"

const Room = () => {
  const {isNavOpen} = useRoom();

  return (
      <main className={`grid ${isNavOpen ? 'grid-cols-[280px_1fr]' : 'grid-cols-[60px_1fr]'} px-10 gap-6 transition-all duration-500`}>
        <RoomNav/>
        <ModelPlatform/>
      </main>
  )
}
export default Room