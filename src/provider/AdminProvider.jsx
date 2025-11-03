import { useState } from "react"
import { AdminContext } from "../context/adminContext"
import useAuth from "../hooks/useAuth"

const AdminProvider = ({children}) => {
  const {auth} = useAuth()

  const [activePage, setActivePage] = useState("nav_dashboard")


  return (
    <AdminContext.Provider value={{
      activePage,
    }}>
      {children}
    </AdminContext.Provider>
  )
}
export default AdminProvider