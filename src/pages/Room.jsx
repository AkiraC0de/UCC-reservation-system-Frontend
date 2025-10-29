import ModelPlatform from "../components/Room/ModelPlatform"
import RoomNav from "../components/Room/Nav/RoomNav";
import RoomReservationConfirm from "../components/Room/RoomReservationConfirm";
import RoomReservationNotif from "../components/Room/RoomReservationNotif";
import useRoom from "../hooks/useRoom";

const Room = () => {
  const {showConfirmation, showNotification} = useRoom()
  return (
    <main className="grid grid-cols-[380px_1fr] px-10 gap-6 transition-all duration-500">
      <RoomNav/>
      <ModelPlatform/>
      {showConfirmation && <RoomReservationConfirm/>}
      {showNotification && <RoomReservationNotif/>}
    </main>
  )
}
export default Room