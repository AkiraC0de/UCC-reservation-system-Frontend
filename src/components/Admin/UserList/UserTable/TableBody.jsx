import NoReservationFound from "./NoReservationFound"
import useUserList from "../../../../hooks/Admin/useUserList"
import UserIcon from "./UserICon"
import { formatDBTime } from "../../../../Utils/utils";

import {Eye, Trash2, Clock} from 'lucide-react';


const TableBody = () => {
  const {setIsUserDetailOpen, setSelectedUser, filteredUsers} = useUserList()

  const getRoleBadge = (role) => {
    const styles = {
      admin: 'bg-purple-100 text-purple-700',
      faculty: 'bg-blue-100 text-blue-700',
      student: 'bg-green-100 text-green-700'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[role]}`}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </span>
    )
  }

  const handleViewUser = (user) => {
    setSelectedUser(user)
    setIsUserDetailOpen(true)
  }

  return (
    <tbody>
    {filteredUsers.length === 0 ? 
      <NoReservationFound/>
    : (
      filteredUsers.map((user) => (
        <tr 
          key={user._id} 
          className="border-b border-gray-100 hover:bg-green-50 transition-color">
          <td className="py-4 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <UserIcon firstname={user.firstName} lastname={user.lastName}/>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-500 md:hidden truncate">{user.email}</p>
              </div>
            </div>
          </td>
          <td className="py-4 px-4 text-sm text-gray-700 hidden md:table-cell">
            <div className="max-w-[200px] truncate">{user.email}</div>
          </td>
          <td className="py-4 px-4">{getRoleBadge(user.role)}</td>
          <td className="py-4 px-4 text-sm text-gray-700 hidden lg:table-cell">{user.program}</td>
          <td className="py-4 px-4 text-sm text-gray-700 hidden xl:table-cell">
            {user.yearLevel ? `${user.yearLevel} - ${user.section}` : 'N/A'}
          </td>
          <td className="py-4 px-4 text-sm text-gray-600 hidden xl:table-cell">{formatDBTime(user.createdAt)}</td>
          <td className="py-4 px-4 sm:px-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleViewUser(user)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="View Details"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete User"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </td>
        </tr>
      ))
    )}
  </tbody>
  )
}
export default TableBody