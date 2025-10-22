import TableTimeList from "./TableTimeList"

const TableContent = () => {
  const tableContentClass = "grid grid-cols-7 max-h-[calc(100vh-220px)] overflow-y-scroll overflow-x-clip scroll-bar-1"
  return (
    <div className={tableContentClass}>
      <TableTimeList/>
    </div>
  )
}
export default TableContent