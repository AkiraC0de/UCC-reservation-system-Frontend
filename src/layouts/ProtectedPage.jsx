import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Auth from "../pages/Auth"
import useAuth from "../hooks/useAuth"

// WILL REQUIRE REFACTORING ONCE THE GLOBAL AUTH PROVIDER HAS BEEN ESTABLISHED
const ProtectedPage = ({children}) => {
  const {auth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.isLogin){
       navigate("/")
    }
  }, [])

  return (
    <>
      {!auth.isLogin && <Auth/>}
      {children}
    </>
  )
}
export default ProtectedPage