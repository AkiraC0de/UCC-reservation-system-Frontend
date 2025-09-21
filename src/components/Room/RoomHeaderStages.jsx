import { CONGRESSIONAL_ROOM_PROGRESS_ITEMS } from "../../configs/Room.config"

const RoomHeaderStages = () => {
  return (
    <ul className="text-[11px] flex justify-between items-center font-meduim px-8">
      {
        CONGRESSIONAL_ROOM_PROGRESS_ITEMS.map((item, index) => (
          <li 
            key={item.id}
            className="flex flex-col justify-center items-center gap-1 fill-black-text w-15"
          >
            <item.icon className="w-7"/>
            {item.label}
          </li>
        )) 
      }
    </ul>
  )
}

export default RoomHeaderStages