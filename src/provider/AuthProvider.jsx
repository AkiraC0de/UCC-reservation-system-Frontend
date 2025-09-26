import { useState } from "react"
import { AuthContext } from "../context/authContext"

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState("login")

  const handleAuthState = () => {
    setAuthState(prev => prev === "login" ? "signup" : "login")
  }

  return (
    <AuthContext.Provider value={{
      authState, handleAuthState
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider