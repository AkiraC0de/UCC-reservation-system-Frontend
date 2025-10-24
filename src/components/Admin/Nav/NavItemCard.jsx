import { Link } from "react-router"
import clsx from "clsx"

const NavItemCard = ({label, Icon, iconClasses, isActive}) => {
  const itemClasses = clsx({
    [iconClasses?.active] : isActive,
    [iconClasses?.default] : !isActive
  }, "transition-all duration-300")
  console.log(iconClasses)
  return (
    <Link className="flex items-center gap-2 p-2 px-3 pb-2.5">
      <Icon className={itemClasses}/>
      <p className="font-medium text-sm">{label}</p>
    </Link>
  )
}
export default NavItemCard