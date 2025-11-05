import { Tv, School } from 'lucide-react'
import InformationCard from './InformationCard'
import UserApplication from './UserApplication'


const InformationSummary = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      <UserApplication
        data={0}
      />
      <div className="flex flex-col gap-4">
        <InformationCard
          data={0}
          label="Room Reservations"
          Icon={School}
          iconColor="#00c951"
        />
        <InformationCard
          data={0}
          label="Item Reservation"
          Icon={Tv}
          iconColor="#b9e85d"
        />
      </div>
      <div className="flex flex-col gap-4">
        <InformationCard
          data={0}
          label="Total Users"
          Icon={School}
          iconColor="#b9e85d"
        />
        <InformationCard
          data={0}
          label="Verified Users"
          Icon={Tv}
          iconColor="#00c951"
        />
      </div>
    </div>
  )
}
export default InformationSummary