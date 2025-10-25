import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import LogoutConfirmation from "../Shared/LogoutConfirmation"
import Notification from "./Notification/Notification.jsx"

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
      <div className="flex flex-col items-end">
        <div className="flex gap-1 text-sm font-medium">
          <h3>{auth?.userData?.firstName}</h3>
          <h3>{auth?.userData?.lastName}</h3>
        </div>
        
      </div>
      {auth.isLogin && 
      <>
      <Notification/>
        {/*<p className="text-sm text-black-text font-semibold ">{ auth.userData.firstName} { auth.userData.lastName}</p>*/}
        <button 
          onClick={toggleShowLogoutConfirm}
          className="border-2 mx-2 text-green-700 text-xs font-semibold rounded-3xl px-3 py-1.5 cursor-pointer hover:bg-gray-200/50 transition-all duration-300">
            <img
            src="icons/logoutIcon.svg"
            width={15}
            />
        </button>
      </>}
      {showLogoutConfirm && <LogoutConfirmation onConfirm={handleConfirm} onCancel={toggleShowLogoutConfirm}/>}
    </div>
  )
}
export default NavUser