import { Outlet } from "react-router"
import Nav from "../components/Admin/Nav/Nav"

const AdminLayout = ({children}) => {
  return (
    <div>
      <div className="grid grid-cols-[280px_1fr] gap-4 bg-[#f5f5f7]">
        <Nav/>
        <Outlet/>
      </div>
    </div>
  )
}
export default AdminLayout