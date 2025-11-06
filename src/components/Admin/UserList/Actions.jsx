import {Search, Plus} from "lucide-react"
import PrimaryButton from "../../Shared/PrimaryButton"
import useUserList from "../../../hooks/Admin/useUserList"

const Actions = () => {
  const {users, searchQuery, setSearchQuery, roleFilter, setRoleFilter, yearLevelFilter, setYearLevelFilter} = useUserList()

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 text-sm">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-4"> 
          {/* Role Filter */}
          <div className="w-full lg:w-48">
            <select
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value)
                if(e.target.value = "faculty"){
                  setYearLevelFilter("all")
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Year Level Filter */}
          <div className="w-full lg:w-48">
            <select
              disabled={roleFilter == "faculty"}
              value={yearLevelFilter}
              onChange={(e) => setYearLevelFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Year Level</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          {/* Add User Button */}
          <PrimaryButton className="flex text-nowrap items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <Plus size={20} />
            <span className="hidden sm:inline">Add User</span>
          </PrimaryButton>
        </div>

      </div>
    </div>
  )
}
export default Actions