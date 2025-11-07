import Table from "../../components/Admin/UserList/UserTable/Table"
import Actions from "../../components/Admin/UserList/Actions"
import Header from "../../components/Admin/UserList/Header"
import UserSummary from "../../components/Admin/UserList/UserSummary"
import UserListProvider from "../../provider/Admin/UserListProvider"
import UserDetailsModal from "../../components/Admin/UserList/UserTable/UserDetailsModal"
import AddNewUser from "../../components/Admin/UserList/AddNewUser"

const UserList = () => {
  
  return (
    <UserListProvider>
        <div className="pt-4">
          <Header/>
          <UserSummary/>
          <Actions/>
          <Table/>
        </div>
        <UserDetailsModal/>
        <AddNewUser/>
    </UserListProvider>
  )
}
export default UserList