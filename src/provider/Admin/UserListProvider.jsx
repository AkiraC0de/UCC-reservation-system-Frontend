import { UserListContext } from "../../context/Admin/UserListContext"

const UserListProvider = ({children}) => {

  return (
    <UserListContext.Provider>
      {children}
    </UserListContext.Provider>
  )
}
export default UserListProvider