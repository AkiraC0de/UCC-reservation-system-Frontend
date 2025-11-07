import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import useDashboard from '../../../hooks/Admin/useDashboard';

const StatsBreakdown = () => {
  const {stats} = useDashboard()

  const statusBreakdown = [
    { name: 'Approved', value: stats.totalApproved, color: '#10b981' },
    { name: 'Pending', value: stats.totalReservationPending, color: '#f59e0b' },
    { name: 'Rejected', value: stats.totalRejected, color: '#ef4444' }
  ];

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h3 className="text-sm font-semibold text-gray-700 mb-4">Status Breakdown</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={statusBreakdown}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {statusBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default StatsBreakdown