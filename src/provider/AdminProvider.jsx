import { useState } from "react"
import { AdminContext } from "../context/adminContext"

const AdminProvider = ({children}) => {
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