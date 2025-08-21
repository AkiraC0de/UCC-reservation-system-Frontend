import { Link, useLocation } from "react-router";
import { NAV_ITEMS } from "../../configs/Nav.config"
import { memo } from "react"

const NavItems = () => {
  const {pathname} = useLocation();   
  return (
    <ul className="flex gap-10">
        {NAV_ITEMS.map(item => (
            <li 
                key={item.id}
                className={`${pathname == item.path ? 'font-bold text-green-700' : 'font-medium'} transition-all duration-300 uppercase text-sm`}>
                <Link to={item.path}>
                    {item.label}
                </Link>
            </li>
        ))}
    </ul>
  )
}
export default memo(NavItems)