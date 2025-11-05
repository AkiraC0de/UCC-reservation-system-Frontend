import useAuth from "../../../hooks/useAuth"
import { Building2 } from "lucide-react"

const Header = () => {
  const userData = useAuth().auth.userData

  return (
    <div className="p-3 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-gradient-2 rounded-lg flex items-center justify-center">
          <Building2 className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900">MRERS</h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>
    </div>
  )
}
export default Header