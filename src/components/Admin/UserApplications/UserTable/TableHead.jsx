const TableHead = () => {
  return (
    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
      <tr>
        <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-700">Name</th>
        <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden lg:table-cell">Program / Year / Section</th>
        <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden md:table-cell">Email</th>
        <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700">Role</th>
        <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700">Status</th>
        <th className="text-left py-4 px-4 text-xs sm:text-sm font-semibold text-gray-700 hidden xl:table-cell">Date Applied</th>
        <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-gray-700">Action</th>
      </tr>
    </thead>
  )
}
export default TableHead