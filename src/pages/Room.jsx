import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/Nav/RoomNav";
import RoomReservationConfirm from "../components/Room/RoomReservationConfirm";
import useRoom from "../hooks/useRoom";

const Room = () => {
  const {schedule} = useRoom()
  return (
    <main className="grid grid-cols-[400px_1fr] px-10 gap-6 transition-all duration-500">
      <RoomNav/>
      <ModelPlatform/>
      {schedule.isConfirmed && <RoomReservationConfirm/>}
    </main>
  )
}
export default Room