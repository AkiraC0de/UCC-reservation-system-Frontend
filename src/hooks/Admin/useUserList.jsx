import { useContext } from "react";
import { UserListContext } from "../../context/Admin/UserListContext";

const useUserList = () => {
  const context = useContext(UserListContext)

  return context
}

export default useUserList