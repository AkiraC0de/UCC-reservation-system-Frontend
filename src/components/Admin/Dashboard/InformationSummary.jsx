import { Package, School, UserPen, UserStar, Users, SquarePen } from 'lucide-react'
import InformationCard from './InformationCard'
import UserApplication from './UserApplication'
import useDashboard from '../../../hooks/Admin/useDashboard'


const InformationSummary = () => {
  const {stats} = useDashboard()

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      <UserApplication
        data={0}
      />
      <div className="flex flex-col gap-4">
        <InformationCard
          data={stats.totalPendingRoom}
          label="Room Reservations"
          Icon={School}
          iconColor="#00c951"
        />
        <InformationCard
          data={stats.totalPendingItem}
          label="Item Reservation"
          Icon={Package}
          iconColor="#b9e85d"
        />
      </div>
      <div className="flex flex-col gap-4">
        <InformationCard
          data={stats.totalPendings}
          label="Total Pendings"
          Icon={SquarePen}
          iconColor="#b9e85d"
        />
        <InformationCard
          data={stats.totalUsers}
          label="Total Users"
          Icon={Users}
          iconColor="#00c951"
        />
      </div>
      <div className="flex flex-col gap-4">
        <InformationCard
          data={stats.totalStudent}
          label="Student Users"
          Icon={UserPen}
          iconColor="#b9e85d"
        />
        <InformationCard
          data={stats.totalFaculty}
          label="Faculty Users"
          Icon={UserStar}
          iconColor="#00c951"
        />
      </div>
    </div>
  )
}
export default InformationSummary