import {User, LogOut} from "lucide-react"
import { Link } from "react-router"

const NavActions = () => {
  return (
    <div className="py-4 border-t border-gray-200 space-y-2">
      <Link to={"/"}>
        <button
          onClick={() => {}}
          className="cursor-pointer text-gray-700 hover:bg-gray-50 w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
        >
          <User size={20} />
          <span>Go to User Side</span>
        </button>
      </Link>
      <button
        onClick={() => {}}
        className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  )
}
export default NavActions