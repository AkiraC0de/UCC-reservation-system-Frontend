import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import LogoutConfirmation from "../Shared/LogoutConfirmation"

const NavUser = () => {
  const {handleLogout, auth} = useAuth()
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  const toggleShowLogoutConfirm = () => {
    setShowLogoutConfirm(prev => !prev)
  }

  const handleConfirm = () => {
    toggleShowLogoutConfirm()
    handleLogout()
  }

  return (
    <div className="flex gap-2 items-center justify-end">
      {auth.isLogin && 
      <>
        <p className="text-sm text-black-text font-semibold ">{ auth.userData.firstName} { auth.userData.lastName}</p>
        <button 
          onClick={toggleShowLogoutConfirm}
          className="border-2 mx-2 text-green-700 text-sm font-semibold rounded-3xl px-5 py-1.5 cursor-pointer hover:bg-gray-200/50 transition-all duration-300">
            Log out
        </button>
      </>}
      {showLogoutConfirm && <LogoutConfirmation onConfirm={handleConfirm} onCancel={toggleShowLogoutConfirm}/>}
    </div>
  )
}
export default NavUser