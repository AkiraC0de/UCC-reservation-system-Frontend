import { useNavigate } from "react-router"
import { useEffect } from "react"
import Auth from "../pages/Auth"
import useAuth from "../hooks/useAuth"

// WILL REQUIRE REFACTORING ONCE THE GLOBAL AUTH PROVIDER HAS BEEN ESTABLISHED
const ProtectedPage = ({children}) => {
  // PORTABLE
  const {auth} = useAuth()

  return (
    <>
      {!auth.isLogin && <Auth />}
      {children}
    </>
  )
}
export default ProtectedPage