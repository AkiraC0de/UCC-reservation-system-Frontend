import Actions from "../../components/Admin/UserList/Actions"
import Header from "../../components/Admin/UserList/Header"
import UserSummary from "../../components/Admin/UserList/UserSummary"

const UserList = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="py-4 pr-4">
        <Header/>
        <UserSummary/>
        <Actions/>
      </div>
    </main>
  )
}
export default UserList