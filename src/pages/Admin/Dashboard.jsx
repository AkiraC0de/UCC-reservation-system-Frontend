import Header from "../../components/Admin/Dashboard/Header"
import InformationSummary from "../../components/Admin/Dashboard/InformationSummary"
import RecentActivity from "../../components/Admin/Dashboard/RecentActivity"

const Dashboard = () => {
  return (
    <main>
      <Header/>
      <div className="flex flex-col gap-4">
        <InformationSummary/>
        <div>
          <RecentActivity/>
        </div>
      </div>
    </main>
  )
}
export default Dashboard