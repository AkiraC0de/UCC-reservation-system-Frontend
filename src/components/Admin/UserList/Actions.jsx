import {Search, Plus} from "lucide-react"

const Actions = () => {
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
              // value={}
              // onChange={}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-4"> 
          {/* Role Filter */}
          <div className="w-full lg:w-48">
            <select
              // value={}
              // onChange={}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Add User Button */}
          <button className="flex text-nowrap items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <Plus size={20} />
            <span className="hidden sm:inline">Add User</span>
          </button>
        </div>

      </div>
    </div>
  )
}
export default Actions