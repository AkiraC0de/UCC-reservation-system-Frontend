import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/Nav/RoomNav";
import useRoom from "../hooks/useRoom"

const Room = () => {
  const {isNavOpen} = useRoom();

  return (
      <main className={`grid ${isNavOpen ? 'grid-cols-[400px_1fr]' : 'grid-cols-[70px_1fr]'} px-10 gap-6 transition-all duration-500`}>
        <RoomNav/>
        <ModelPlatform/>
      </main>
  )
}
export default Room