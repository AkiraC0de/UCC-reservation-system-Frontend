import { TIME_SLOTS } from "../../../configs/Room.config"

const TableColumn = ({children}) => {
  const rowCount = TIME_SLOTS.length
  return (
    <div className={`grid grid-rows-${rowCount} transition-all duration-300`}>
      {children}
    </div>
  )
}
export default TableColumn