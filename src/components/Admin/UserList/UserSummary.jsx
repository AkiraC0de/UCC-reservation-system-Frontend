import {Users, UserPen, UserStar} from "lucide-react"
import UserSummayCard from "../../Shared/UserSummayCard"
import useUserList from "../../../hooks/Admin/useUserList"


const UserSummary = () => {
  const {stats} = useUserList()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <UserSummayCard
        label="Total Users"
        userCount={stats.totalUsers}
        Icon={Users}
        iconColor="#06a842"
        iconBackground="#f0fdf4"
      />
      <UserSummayCard
        label="Students"
        userCount={stats.studentUsers}
        Icon={UserPen}
        iconColor="#93df60"
        iconBackground="#f0fdf4"
      />
      <UserSummayCard
        label="Faculty"
        userCount={stats.facultyUsers}
        Icon={UserStar}
        iconColor="#155dfc"
        iconBackground="#eff6ff"
      />
    </div>
  )
}
export default UserSummary