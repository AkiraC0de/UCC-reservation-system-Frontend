import { useState } from "react"
import { MENU_ITEMS } from "../../../configs/Admin/Nav.config"
import useAdmin from "../../../hooks/useAdmin"
import NavItemCard from "./NavItemCard"
import { useLocation } from "react-router"

const NavList = () => {
  const [expandedItem, setExpandedItem] = useState("")
  const { pathname } = useLocation()

  return (
    <div className="mt-4">
      {MENU_ITEMS.map((item) => (
        <NavItemCard 
          key={item.id}
          isExpanded={expandedItem == item.id}
          currentPage={pathname}
          toggleExpandedItem={setExpandedItem}
          item={item}
        />
      ))}
    </div>
  )
}
export default NavList