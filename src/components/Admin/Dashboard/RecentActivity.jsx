import {Building2, Package} from "lucide-react"
import useDashboard from "../../../hooks/Admin/useDashboard"
import { useMemo } from "react"
import { TIME_SLOTS_30_MIN } from "../../../configs/Room.config"

const RecentActivity = () => {
  const {calendarReservation} = useDashboard()

  const recentActivity = useMemo(() => {
    return calendarReservation.slice(0, 7)
  }, [calendarReservation])


  const getStatusBadge = (status) => {
    const styles = {
      accepted: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      rejected: 'bg-red-100 text-red-700'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  return (
     <div className="bg-white rounded-lg shadow-md p-6 anim-fade-pop-top">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black-text">Recent Activity</h2>
        <button className="text-green-600 hover:text-green-700 text-sm font-medium">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Purpose</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Reserved By</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((activity) => (
              <tr key={activity._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                    activity.type === 'Room' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {activity.type === 'Room' ? <Building2 size={12} /> : <Package size={12} />}
                    {activity.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">{activity.purpose}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{activity.reservedBy}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{activity.date} {TIME_SLOTS_30_MIN[activity.startingTime]} - {TIME_SLOTS_30_MIN[activity.startingTime]}</td>
                <td className="py-3 px-4">{getStatusBadge(activity.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default RecentActivity