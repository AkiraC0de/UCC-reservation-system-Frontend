import TableColumn from "./TableColumn"
import { TIME_SLOTS } from "../../../configs/Room.config"
import TableTimeCell from "./TableTimeCell"
import { useScheduleContext } from "./ScheduleTable"

const TableTimeList = () => {
  const { isOnStartingTimeSelection, cellBeingHovered } = useScheduleContext()
  return (
    <TableColumn>
        {TIME_SLOTS.map((time, index) => 
            <TableTimeCell 
              key={index} 
              time={time} 
              isTimeSecondCell={cellBeingHovered % 2 == 1}
              isOnStartingTimeSelection={isOnStartingTimeSelection}
              isBeingHovered={cellBeingHovered == index * 2 || cellBeingHovered - 1 === index * 2}
            />
        )}
    </TableColumn>
  )
}
export default TableTimeList