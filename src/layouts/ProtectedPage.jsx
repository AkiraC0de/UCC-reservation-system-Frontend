import { useNavigate } from "react-router"
import { useEffect } from "react"

// WILL REQUIRE REFACTORING ONCE THE GLOBAL AUTH PROVIDER HAS BEEN ESTABLISHED
const ProtectedPage = ({children}) => {
  // PORTABLE
  const isLogin = true
  const navigate = useNavigate()

  if (!isLogin) {
    navigate('/auth', { replace: true }); 
  }

  return (
    <>
      {children}
    </>
  )
}
export default ProtectedPage