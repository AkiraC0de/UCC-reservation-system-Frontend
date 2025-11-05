import {Building2, Package} from "lucide-react"

const RecentActivity = () => {
  const recentActivity = [
    { id: 1, type: 'Room', purpose: 'Laboratory Activity', reservedBy: 'Juan Dela Cruz', date: '2025-11-05', status: 'pending' },
    { id: 2, type: 'Item', purpose: 'Group Study', reservedBy: 'Maria Santos', date: '2025-11-04', status: 'accepted' },
    { id: 3, type: 'Room', purpose: 'Thesis Defense', reservedBy: 'Pedro Garcia', date: '2025-11-06', status: 'accepted' },
    { id: 4, type: 'Item', purpose: 'Video Recording', reservedBy: 'Ana Reyes', date: '2025-11-04', status: 'rejected' },
    { id: 5, type: 'Room', purpose: 'Meeting', reservedBy: 'Carlos Mendoza', date: '2025-11-05', status: 'pending' },
    { id: 6, type: 'Item', purpose: 'Class Presentation', reservedBy: 'Sofia Torres', date: '2025-11-07', status: 'accepted' },
    { id: 7, type: 'Room', purpose: 'Workshop', reservedBy: 'Miguel Ramos', date: '2025-11-08', status: 'pending' }
  ]

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
     <div className="bg-white rounded-lg shadow-md p-6">
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
              <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
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
                <td className="py-3 px-4 text-sm text-gray-600">{activity.date}</td>
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