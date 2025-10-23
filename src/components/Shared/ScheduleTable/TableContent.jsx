import TableTimeList from "./TableTimeList"
import TableColumn from "./TableColumn"
import TableCell from "./TableCell"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config.js"

const TableContent = () => {
  const tableContentClass = "grid grid-cols-7 max-h-[calc(100vh-220px)] overflow-y-scroll overflow-x-clip scroll-bar-1"
  return (
    <div className={tableContentClass}>
      <TableTimeList/>
      {
        [...Array(6)].map((_, colIndex) => (
          <TableColumn key={colIndex}>
              {TIME_SLOTS_30_MIN.map((_, rowIndex) => (
                <TableCell key={rowIndex} colIndex={colIndex} rowIndex={rowIndex}/>
              ))}
          </TableColumn>
        ))
      }
    </div>
  )
}
export default TableContent