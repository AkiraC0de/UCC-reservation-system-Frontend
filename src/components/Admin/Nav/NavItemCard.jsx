import { Link, useLocation } from "react-router"
import clsx from "clsx"

const NavItemCard = ({ label, Icon, to }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  const itemClasses = clsx(
    isActive ? "w-8 fill-green-500 stroke-green-500" : "w-10 stroke-gray-400 p-2 fill-gray-400 bg-white rounded-lg shadow-md",
    "transition-all duration-300"
  )

  const buttonClasses = clsx(
    "flex items-center gap-2 py-2 px-3  rounded-xl transition-all duration-300 m-4" ,
    isActive ? "bg-white text-green-500 shadow-md" : " text-black-text hover:bg-gray-200"
  )

  return (
    <Link
      to={to}
      className={buttonClasses}
    >
      <Icon className={itemClasses} />
      <p
        className="font-medium text-sm"
      >
        {label}
      </p>
    </Link>
  )
}

export default NavItemCard
