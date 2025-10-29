import { useLocation, useNavigate } from "react-router"
import { useEffect } from "react"
import Auth from "../pages/Auth"
import useAuth from "../hooks/useAuth"

// WILL REQUIRE REFACTORING ONCE THE GLOBAL AUTH PROVIDER HAS BEEN ESTABLISHED
const ProtectedPage = ({children}) => {
  // PORTABLE
  const {auth} = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(auth.isLogin) return
  //   console.log(auth.isLogin)
  //   navigate("/")
  // }, [])

  return (
    <>
      {!auth.isLogin && <Auth/>}
      {children}
    </>
  )
}
export default ProtectedPage