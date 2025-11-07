import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import useDashboard from '../../../hooks/Admin/useDashboard';

const UserDistribution = () => {
  const {stats} = useDashboard()

  const userRoleDistribution = [
    { name: 'Students', value: stats.totalStudent, color: '#3b82f6' },
    { name: 'Faculty', value: stats.totalFaculty, color: '#8b5cf6' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">User Distribution</h2>
      <ResponsiveContainer width="100%" height={210}>
        <PieChart>
          <Pie
            data={userRoleDistribution}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {userRoleDistribution.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2">
        {userRoleDistribution.map((role, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }}></div>
              <span className="text-gray-700">{role.name}</span>
            </div>
            <span className="font-semibold text-gray-900">{role.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
export default UserDistribution