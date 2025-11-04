import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Auth from "../pages/Auth"
import useAuth from "../hooks/useAuth"

const ProtectedPage = ({children}) => {
  const {auth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.isLogin){
       navigate("/")
    }
  }, [])

  useEffect(() => {
    if(auth.isLogin && auth?.userData?.role == "admin"){
       navigate("/admin")
    }
  }, [auth.isLogin])

  return (
    <>
      {!auth.isLogin && <Auth/>}
      {children}
    </>
  )
}
export default ProtectedPage