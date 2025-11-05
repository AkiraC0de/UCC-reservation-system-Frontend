import { Outlet, useNavigate } from "react-router"
import { useEffect } from "react"
import Nav from "../components/Admin/Nav/Nav"
import useAuth from "../hooks/useAuth"

const AdminLayout = () => {  
  return (
    <>
      <div className="grid grid-cols-[280px_1fr] gap-4 bg-gray-50">
        <Nav/>
        <main className="pr-4">
          <Outlet/>
        </main>
      </div>
    </>
  )
}
export default AdminLayout