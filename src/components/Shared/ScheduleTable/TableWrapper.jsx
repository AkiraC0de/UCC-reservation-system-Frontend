
const TableWrapper = ({children}) => {
  const tableClass = "bg-white w-full relative max-w-4xl mx-auto rounded-lg shadow-sm overflow-y-hidden overflow-x-clip"
 
  return (
    <div className={tableClass}>
      {children}
    </div>
  )
}
export default TableWrapper