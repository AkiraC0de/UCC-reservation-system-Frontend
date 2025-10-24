import useAuth from "../../../hooks/useAuth"

const Header = () => {
  const userData = useAuth().auth.userData

  return (
    <div className="flex items-center gap-2 text-black-text mb-8">
      <div className="w-12 aspect-square bg-white border-2 border-green-500 rounded-full">
        <img className="aspect-square border-4 border-white rounded-full"src="/admin/profile.png" alt="admin-image" />
      </div>
      <div>
        <p className="text-sm font-medium">{userData?.firstName} {userData?.lastName}</p>
        <p className="text-xs text-gray-400">Admin</p>
      </div>
    </div>
  )
}
export default Header