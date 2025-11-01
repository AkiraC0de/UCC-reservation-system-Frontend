import Actions from "../components/Items/Actions"
import Banner from "../components/Items/Banner"
import ItemGrid from "../components/Items/ItemGrid"
import { useState, useEffect } from "react"
import { ITEMS_DATA } from "../configs/Items.config"

const Items = () => {
  const [filteredData, setFilteredData] = useState(ITEMS_DATA)
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  const applyFilters = () => {
    let filtered = ITEMS_DATA.filter(item =>
      item.codeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (typeFilter) {
      filtered = filtered.filter(item => item.type === typeFilter);
    }
    setFilteredData(filtered);
  }

  useEffect(() => {
    applyFilters()
  }, [searchTerm, typeFilter]);

  return (
    <main className="px-12 pb-12">
      <section className="bg-white rounded-lg shadow-md px-6 py-4">
        <Banner/>
        <Actions 
          searchTerm={searchTerm}
          typeFilter={typeFilter}
          handleSearch={setSearchTerm} 
          handleType={setTypeFilter}
        />
      </section>
      <section className=" mx-auto my-6">
        <ItemGrid data={filteredData}/>
      </section>
    </main>
  )
}
export default Items