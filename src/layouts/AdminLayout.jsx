import { Outlet } from "react-router"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Nav from "../components/Admin/Nav/Nav"
import useAuth from "../hooks/useAuth"

const AdminLayout = () => {  
  const {auth, isAutoLoginAtProgress} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAutoLoginAtProgress && auth.isLogin && auth?.userData?.role != "admin"){
       navigate("/")
    }
  }, [isAutoLoginAtProgress])

  return (
    <>
      <div className="grid grid-cols-[280px_1fr] gap-4 bg-gray-50">
        <Nav/>
        <main className="pr-4">
          {auth?.userData?.role == "admin" && <Outlet/>}
        </main>
      </div>
    </>
  )
}
export default AdminLayout