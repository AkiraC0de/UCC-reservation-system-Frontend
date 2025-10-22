import TableColumn from "./TableColumn"
import { TIME_SLOTS } from "../../../configs/Room.config"
import TableTimeCell from "./TableTimeCell"

const TableTimeList = () => {
  return (
    <TableColumn>
        {TIME_SLOTS.map((time, index) => 
            <TableTimeCell key={index} time={time}/>
        )}
    </TableColumn>
  )
}
export default TableTimeList