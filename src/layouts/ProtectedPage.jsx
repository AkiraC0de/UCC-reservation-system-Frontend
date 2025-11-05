import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Auth from "../pages/Auth"
import useAuth from "../hooks/useAuth"

const ProtectedPage = ({children}) => {
  const {auth, isAutoLoginAtProgress} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAutoLoginAtProgress && !auth.isLogin){
       navigate("/")
    }
  }, [isAutoLoginAtProgress])

  return (
    <>
      {!auth.isLogin && <Auth/>}
      {children}
    </>
  )
}
export default ProtectedPage