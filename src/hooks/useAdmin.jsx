import { useContext } from "react";
import { AdminContext } from "../context/adminContext";

const useAdmin = () => {
  const context = useContext(AdminContext)

  return context
}

export default useAdmin