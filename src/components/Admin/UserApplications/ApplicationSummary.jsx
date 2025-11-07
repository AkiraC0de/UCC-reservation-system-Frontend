import UserSummayCard from "../../Shared/UserSummayCard"
import { Clock, UserCheck , AlertCircle } from "lucide-react"

const ApplicationSummary = ({allApplications}) => {
  const stats = {
    totalPending: allApplications.filter(a => a.status === 'pending').length,
    verified: allApplications.filter(a => a.status === 'verified').length,
    rejected: allApplications.filter(a => a.status === 'rejected').length
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <UserSummayCard
        label="Total Pendings"
        userCount={stats.totalPending}
        Icon={Clock}
        iconColor="#eab308"
        iconBackground="#fefce8"
      />
      <UserSummayCard
        label="Verified"
        userCount={stats.verified}
        Icon={UserCheck}
        iconColor="#22c55e"
        iconBackground="#f0fdf4"
      />
      <UserSummayCard
        label="Rejected"
        userCount={stats.rejected}
        Icon={AlertCircle}
        iconColor="#ef4444"
        iconBackground="#fef2f2"
      />
    </div>
  )
}
export default ApplicationSummary