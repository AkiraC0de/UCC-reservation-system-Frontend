import { useContext } from "react";
import { DashboardContext } from "../../context/Admin/DashboardContext";

const useDashboard = () => {
  const context = useContext(DashboardContext)

  return context
}

export default useDashboard