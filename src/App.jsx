import MainLayout from "./layouts/MainLayout"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Room from "./pages/Room"
import Auth from "./pages/Auth"
import ProtectedPage from "./layouts/ProtectedPage"

function App() {
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
