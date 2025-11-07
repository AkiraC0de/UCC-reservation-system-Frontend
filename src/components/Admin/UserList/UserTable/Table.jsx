import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

const Table = () => {
  return (
    <div className="w-full overflow-hidden anim-fade-pop-top">
      <table className="overflow-x-scroll w-full">
        <TableHeader/>
        <TableBody/>
      </table>
      
    </div>
  )
}
export default Table