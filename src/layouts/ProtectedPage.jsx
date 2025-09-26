import { useNavigate } from "react-router"
import { useEffect } from "react"
import Auth from "../pages/Auth"

// WILL REQUIRE REFACTORING ONCE THE GLOBAL AUTH PROVIDER HAS BEEN ESTABLISHED
const ProtectedPage = ({children}) => {
  // PORTABLE
  const isLogin = false
  const navigate = useNavigate()


  return (
    <>
      {children}
      {!isLogin && <Auth />}
    </>
  )
}
export default ProtectedPage