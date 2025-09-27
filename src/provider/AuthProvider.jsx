import { useState } from "react"
import { AuthContext } from "../context/authContext"

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState("login")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({})
  const [auth, setAuth] = useState({
    email: null,
    password : null,
    isLogin: false
  })

  const handleLogin = () => {
    // #1 Extract the user Input 
    const {email, password} = auth

    // #2 Set up the Fetch Link and Option
    const URL = "http://localhost:8080/api/auth/login"
    const OPTION = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({email, password})
    }

    // #3 start the loading animation and Reset the Errors
    setIsLoading(true)
    setError({})

    fetch(URL, OPTION)
    .then(async res => {
      // #4 After receiving the response, stop the loading animation
      setIsLoading(false)
      

      // #5 Parse the Data from JSON to JS object
      const data = await res.json()

      if (!res.ok) {
        // const errorMessage = data.message || `Login failed with status: ${res.status}`
        setError(prev => ({
          ...prev,
          [data.errorAt] : data.message
        }))
      }
      
      return data
    })
    .then(data => {
      if (data && data.success) {
        setAuth(prev => ({ ...prev, isLogin: true, data: data }))
      }
    })
    .catch((err) => {
      console.error("fetch error:", err)
    })
  }

  const handleAuth = (inputName, value) => {
    setAuth(prev => ({
      ...prev,
      [inputName] : value
    }))
  }

  const handleError = (inputName, value) => {
    setError(prev => ({
      ...prev,
      [inputName] : value
    }))
  }

  const handleLoading = (value) => {
    setIsLoading(value)
  }

  const resetError = () => {
    setError({})
  }

  const handleAuthState = () => {
    setAuthState(prev => prev === "login" ? "signup" : "login")
  }

  return (
    <AuthContext.Provider value={{
      auth, handleAuth,
      handleLogin, 
      isLoading, handleLoading,
      error, handleError, resetError,
      authState, handleAuthState
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider