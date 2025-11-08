import Header from "../../components/Admin/Dashboard/Header"
import InformationSummary from "../../components/Admin/Dashboard/InformationSummary"
import RecentActivity from "../../components/Admin/Dashboard/RecentActivity"
import StatsBreakdown from "../../components/Admin/Dashboard/StatsBreakdown"
import UserDistribution from "../../components/Admin/Dashboard/UserDistribution"
import DashboardProvider from "../../provider/Admin/DashboardProvider"

const Dashboard = () => {
  return (
    <DashboardProvider>
      <Header/>
      <div className="flex flex-col gap-4 py-4">
        <InformationSummary/>
        <div className="space-y-4">
          <RecentActivity/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UserDistribution/>
            <StatsBreakdown/>
          </div>
        </div>
      </div>
      
    </DashboardProvider>
  )
}
export default Dashboard