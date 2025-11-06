import {Users} from "lucide-react"

const NoReservationFound = () => {
  return (
    <tr>
      <td colSpan="8" className="text-center py-12">
        <Users className="mx-auto mb-3 text-gray-400" size={48} />
        <p className="text-gray-600 font-medium mb-1">No users found</p>
        <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
      </td>
    </tr>
  )
}
export default NoReservationFound