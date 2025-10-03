import { useState, useEffect } from "react"
import { AuthContext } from "../context/authContext"

const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState("login")
  const [isLoading, setIsLoading] = useState(false)
  const [isAutoLoginAtProgress, setIsAutoLoginAtProgress] = useState(true)
  const [error, setError] = useState({})
  const [auth, setAuth] = useState({
    email: null,
    password : null,
    isLogin: true
  })

  
  const handleLogin = () => {
    // #1 Extract the user Input 
    const {email, password} = auth

    // #2 Set up the Fetch Link and Option
    const URL_LOGIN = "http://localhost:8080/api/auth/login"
    const OPTION_LOGIN = {
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

    fetch(URL_LOGIN, OPTION_LOGIN)
    .then(async res => {
      const data = await res.json()
      if (!res.ok) {
        handleError(data.errorAt, data.message)
        const errorMessage = data.message || `Login failed with status: ${res.status}`
        throw new Error(errorMessage)
      }
      return data
    })
    .then(data => {
      if (data && data.success) {
        setAuth(prev => ({
          ...prev,
          isLogin: true,
          userData: data.data,
          email: "",
          password: ""
        }))
      }
    })
    .catch((err) => {
      console.error("fetch error:", err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  const URL_LOGOUT = "http://localhost:8080/api/auth/logout"
  const OPTION_LOGOUT = {
    method: "POST",
    credentials: 'include',
    headers: {
        "Content-Type": "application/json"
    },
  }

  const handleLogout = () => {
    setIsLoading(true)
    fetch(URL_LOGOUT, OPTION_LOGOUT)
    .then(res => {
      handleAuth("isLogin", false)

      if(!res.ok){
        throw new Error("Something went wrong")
      }
      setAuth({})

    })
    .catch(err => console.log("Logout error: ",err.message))
    .finally(() => {
      setIsLoading(false)
    })
  }

  const URL_REFRESH = "http://localhost:8080/api/auth/refresh"
  const OPTION_REFRESH = {
    method: "POST",
    credentials: 'include',
    headers: {
        "Content-Type": "application/json"
    },
  }

  // AUTO LOGIN
  useEffect(() => {
    handleLoading(true)

    fetch(URL_REFRESH, OPTION_REFRESH)
    .then(async res => {
      const data = await res.json()
      setIsAutoLoginAtProgress(false)

      if (!res.ok) {
          throw new Error('AUTH_REFRESH_TOKEN_EXPIRED_OR_MISSING'); 
      }

      if(data.success){    
        handleAuth("isLogin", true)
        handleAuth("userData", data.data)
      }
    })
    .catch(err => {
      if (err.message !== 'AUTH_REFRESH_TOKEN_EXPIRED_OR_MISSING') {
          // If it's a true network failure or an unexpected error, log it.
          console.error("Auto-login critical error:", err);
      }
    })
    .finally(() => {
      handleLoading(false)
    })
  }, [])

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
    setError({
      email: null,
      password: null
    })
  }

  const handleAuthState = () => {
    setAuthState(prev => prev === "login" ? "signup" : "login")
  }

  return (
    <AuthContext.Provider value={{
      auth, handleAuth,
      handleLogin, handleLogout, isAutoLoginAtProgress,
      isLoading, handleLoading,
      error, handleError, resetError,
      authState, handleAuthState
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider