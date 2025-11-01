const Actions = ({searchTerm, handleSearch, typeFilter, handleType}) => {
  return (
    <section className="flex justify-between w-full mt-5 py-3 gap-4">
      <input
            type="text"
            placeholder="Search equipment..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <select
          value={typeFilter}
          onChange={(e) => handleType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="projector">Projector</option>
          <option value="television">TV</option>
          <option value="peripheral">Peripheral</option>
        </select>
      </div>
    </section>
  )
}
export default Actions