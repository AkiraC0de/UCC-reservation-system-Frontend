import RoomDatePicker from "./RoomDatePicker"


const RoomNavSchedSection = () => {
  

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm px-2 text-black-text">Select your Schedule</h2>
      <RoomDatePicker/>
    </div> 
  )
}
export default RoomNavSchedSection