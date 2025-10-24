
import { NAV_ITEMS, NAV_ROOM_ITEMS } from "../../../configs/Admin/Nav.config"
import useAdmin from "../../../hooks/useAdmin"
import NavItemCard from "./NavItemCard"

const NavList = () => {
  const {activePage} = useAdmin()
  return (
    <div>
      <h2 className="font-semibold text-sm ml-6 text-gray-400">MAIN</h2>
      {NAV_ITEMS.map((item) => (
        <NavItemCard 
          key={item.id}
          label={item.label}
          Icon={item.icon}
          iconClasses={item.iconClasses}
        />
      ))}
      <h2 className="font-semibold text-sm ml-6 text-gray-400">ROOM</h2>
      {NAV_ROOM_ITEMS.map((item, index) => (
        <NavItemCard 
          key={index}
          label={item.label}
          Icon={item.icon}
        />
      ))}
    </div>
  )
}
export default NavList