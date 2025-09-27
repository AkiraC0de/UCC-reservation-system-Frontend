import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Room from "./pages/Room"
import Auth from "./pages/Auth"
import ProtectedPage from "./layouts/ProtectedPage"
import { useEffect } from "react"
import useAuth from "./hooks/useAuth"

function App() {
  const {auth, handleAuth, handleLoading} = useAuth()
  const URL = "http://localhost:8080/api/auth/refresh"
  const OPTION = {
    method: "POST",
    credentials: 'include',
    headers: {
        "Content-Type": "application/json"
    },
  }
  useEffect(() => {
    handleLoading(true)
    fetch(URL, OPTION)
    .then(async res => {
      const data = await res.json()

      if(data.success){    
        handleAuth("isLogin", true)
        handleAuth("data", data)
      }
      return data
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <Routes>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/" element={
        <ProtectedPage>
          <MainLayout/>
        </ProtectedPage>
        }>
        <Route index element={<Home/> }></Route>
        <Route path="/room" element={<Room/>}/>
        <Route path="/projector" element={<Room/>}></Route>
        <Route path="/about" element={<Room/>}></Route>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App
