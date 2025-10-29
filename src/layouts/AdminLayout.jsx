import { Outlet, useNavigate } from "react-router"
import { useEffect } from "react"
import Nav from "../components/Admin/Nav/Nav"
import useAuth from "../hooks/useAuth"

const AdminLayout = () => {  
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