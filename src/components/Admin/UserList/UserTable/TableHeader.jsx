const TableHeader = () => {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="text-left py-4 px-3 sm:px-6 text-xs sm:text-sm font-semibold text-gray-700">Name</th>
        <th className="text-left py-4 px-3 text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Email</th>
        <th className="text-left py-4 px-3 text-xs sm:text-sm font-semibold text-gray-700">Role</th>
        <th className="text-left py-4 px-3 text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Program</th>
        <th className="text-left py-4 px-3 text-xs sm:text-sm font-semibold text-gray-700 hidden xl:table-cell">Year & Section</th>
        <th className="text-left py-4 px-3 text-xs sm:text-sm font-semibold text-gray-700 hidden xl:table-cell">Date Created</th>
        <th className="text-left py-4 px-3 sm:px-6 text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
      </tr>
    </thead>
  )
}
export default TableHeader